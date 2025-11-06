import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { AppModule } from '../../../src/app.module';
import { departmentUpdateTests } from './department.update-cases';
import { caseType, validData } from '../utility-interfaces';
import { intiFun } from '../../utils/test-module-app-init';
import { generate } from '../helpers/department-test-helper';

// compute cases at parse time so it.each works correctly
const cases = departmentUpdateTests();

describe('Department Update E2E (PATCH /department/:id)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    app = await intiFun();
  });

  describe('Auto-generated update validation tests', () => {
    it.each(cases)('%s', async (testCase: caseType) => {
      // console.log('Testcase:', testCase.test_case_name);
      // console.log(testCase)
      const data = typeof testCase.dataUpdate === 'function' ? await testCase.dataUpdate(app) : testCase.dataUpdate;

      const id:number = data.id;
      const payload:validData = { ...data };
      delete payload.id;

      // console.log(payload)
      const res = await request(app.getHttpServer()).patch(`/department/${id}`).send(payload);
      // console.log(res.body)
      if (testCase.expected === 200) {
        expect(res.status).toBe(200);
      } else {
        // console.log(res.status, res.body);
        expect(res.status).toBe(testCase.expected);
      }
    });
    expect(1+2).toBe(3)
  });

  afterAll(async () => {
    await app.close();
  });
});
