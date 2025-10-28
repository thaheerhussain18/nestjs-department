
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { AppModule } from '../../../src/app.module';
import { departmentCreateTests } from './department-create-cases';
import {generate} from '../helpers/name-code-description-generator';
import { caseType } from '../utility-interfaces';
import { intiFun } from '../helpers/test-app-init';


const cases = departmentCreateTests();


describe('Department Create E2E', () => {
    let app: INestApplication;

    beforeAll(async () => {
        app = await intiFun();
    });

    describe('Auto-generated validation tests', () => {
        it.each(cases)('running test', async (t: caseType) => {
            console.log(t.test_case_name)
            const dto=typeof t.dataCreate === 'function' ? await t.dataCreate(app) : t.dataCreate;

            const res = await request(app.getHttpServer()).post('/department').send(dto);
            // console.log(res.body)
            if (t.expected === 201) expect(res.status).toBe(201);
            else {expect(res.status).toBeGreaterThanOrEqual(400);
                // console.log(res.status)
            }
        });
    });
    afterAll(async () => {
        await app.close();
    });
});
