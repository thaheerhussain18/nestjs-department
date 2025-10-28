import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { AppModule } from '../../../src/app.module';
import { departmentUpdateTests } from './department.update-cases';
import { generate } from '../helpers/name-code-description-generator';
import { caseType, validData } from '../utility-interfaces';
import { intiFun } from '../helpers/test-app-init';

// compute cases at parse time so it.each works correctly
const cases = departmentUpdateTests();

describe('Department Update E2E (PATCH /department/:id)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    app = await intiFun();
  });

  describe('Auto-generated update validation tests', () => {
    it.each(cases)('running test case', async (testCase: caseType) => {
      console.log('Testcase:', testCase.test_case_name);
      const data = typeof testCase.dataUpdate === 'function' ? await testCase.dataUpdate(app) : testCase.dataUpdate;

      const id:number = data.id;
      const payload:validData = { ...data };
      delete payload.id;

      const res = await request(app.getHttpServer()).patch(`/department/${id}`).send(payload);

      // console.log('Payload:', payload);
      // console.log(testCase.test_case_name, '=>', 'Status:', res.status, 'Response:', res.body);
      if (testCase.expected === 200) {
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
