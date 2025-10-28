
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { AppModule } from '../../src/app.module';
import { departmentCreateTests, generate } from './helpers/department-create-cases';
import { caseType } from './utility-interfaces';


const cases = departmentCreateTests();

async function intiFun() {
    const moduleFixture: TestingModule = await Test.createTestingModule({
        imports: [AppModule],
    }).compile();

    const app = moduleFixture.createNestApplication();
    await app.init();

    return app;
}
describe('Department Create E2E', () => {
    let app: INestApplication;

    beforeAll(async () => {
        app = await intiFun();
    });

    describe('Auto-generated validation tests', () => {
        it.each(cases)('running test', async (t: caseType) => {
            console.log(t.test_case_name)
            const dto=t.data();
            const res = await request(app.getHttpServer()).post('/department').send(dto);
            // console.log(res.body)
            if (t.expected === 201) expect(res.status).toBe(201);
            else {expect(res.status).toBeGreaterThanOrEqual(400);
                // console.log(res.status)
            }
        });
    });

    
    it('❌ should fail when department name & code already exists', async () => {
        const payload = generate(true);
        await request(app.getHttpServer()).post('/department').send(payload).expect(201);

        const res = await request(app.getHttpServer()).post('/department').send(payload);
        expect(res.status).toBeGreaterThanOrEqual(400);
    });

    afterAll(async () => {
        await app.close();
    });
});
