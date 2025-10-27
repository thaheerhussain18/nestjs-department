
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { AppModule } from '../../src/app.module';
import { departmentCreateTests, generate } from './helpers/department-create-cases';


const cases = departmentCreateTests();

describe('Department Create E2E', () => {
    let app: INestApplication;

    beforeAll(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();

        app = moduleFixture.createNestApplication();
        await app.init();
    });

    describe('Auto-generated validation tests', () => {
        it.each(cases)('running test', async (t: any) => {
            console.log(t.name)
            const dto=t.data();
            const res = await request(app.getHttpServer()).post('/department').send(dto);
            console.log(res.body)
            if (t.expected === 201) expect(res.status).toBe(201);
            else {expect(res.status).toBeGreaterThanOrEqual(400);
                console.log(res.error)
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
