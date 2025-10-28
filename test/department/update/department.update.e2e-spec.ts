import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { AppModule } from '../../../src/app.module';
import { departmentUpdateTests } from './department.update-cases';
import { generate } from '../helpers/name-code-description-generator';
import { caseType } from '../utility-interfaces';

// compute cases at parse time so it.each works correctly
const cases = departmentUpdateTests();

describe('Department Update E2E (PATCH /department/:id)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  describe('Auto-generated update validation tests', () => {
    it.each(cases)('%s', async (t: caseType) => {
      // t.data may be plain or an async function that uses `app` to create resources
      console.log('Testcase:', t.test_case_name);
      const data = typeof t.dataUpdate === 'function' ? await t.dataUpdate(app) : t.dataUpdate;

      // empty body case: return 400 (we treat empty data as invalid)
      if (!data || Object.keys(data).length === 0) {
        // try a PATCH without body (we still need an id). We'll use a created id for this check.
        const cr = await request(app.getHttpServer()).post('/department').send(generate(true));
        const id = cr.body?.id ?? cr.body?.data?.id ?? cr.body?.created?.id ?? cr.body?.department?.id;
        const res = await request(app.getHttpServer()).patch(`/department/${id}`).send({});
        expect(res.status).toBeGreaterThanOrEqual(400);
        return;
      }

      const id = data.id;
      const payload = { ...data };
      delete (payload as any).id;

      const res = await request(app.getHttpServer()).patch(`/department/${id}`).send(payload);

      if (t.expected === 200) {
        expect(res.status).toBe(200);
      } else {
        expect(res.status).toBeGreaterThanOrEqual(400);
      }
    });
  });

  afterAll(async () => {
    await app.close();
  });
});
