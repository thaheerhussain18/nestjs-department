import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { intiFun } from '../../utils/test-module-app-init';
import { caseType } from '../utility-interfaces';
import { departmentGetTests } from './department-get-cases';

const cases = departmentGetTests();

describe('Department Get E2E (GET /department)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    app = await intiFun();
  });

  describe('Auto-generated get validation tests', () => {
    it.each(cases)('%s', async (testCase) => {
      if (testCase.dynamicTest) {
        await testCase.dynamicTest(app);
      } else {
        console.log(testCase.query)
        const res = await request(app.getHttpServer())
          .get('/department')
          .query(testCase.query|| {})
          .expect(testCase.expected);
console.log(testCase.query)
        if (testCase.expected === 200) {
          expect(res.body).toHaveProperty('data');
          expect(Array.isArray(res.body.data)).toBe(true);
        }
      }
    });
  });

  afterAll(async () => {
    await app.close();
  });
});
