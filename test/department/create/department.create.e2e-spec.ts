
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { AppModule } from '../../../src/app.module';
import { departmentCreateTests } from './department-create-cases';
import {generate} from '../helpers/name-code-description-generator';
import { caseType } from '../utility-interfaces';
import { intiFun } from '../helpers/test-app-init';
import { postDepartment } from '../helpers/post-create';


const cases = departmentCreateTests();


describe('Department Create E2E', () => {
    let app: INestApplication;

    beforeAll(async () => {
        app = await intiFun();
    });

    describe('Auto-generated validation tests', () => {
        it.each(cases)('%s', async (testcase: caseType) => {
            console.log(testcase.test_case_name)
            const dto=typeof testcase.dataCreate === 'function' ? await testcase.dataCreate(app) : testcase.dataCreate;

            const res = await postDepartment(app,dto);
            console.log(res.status,res.body);
            if (testcase.expected === 201) expect(res.status).toBe(201);
            else {expect(res.status).toBeGreaterThanOrEqual(testcase.expected);
            }
        });
    });
    afterAll(async () => {
        await app.close();
    });
});
