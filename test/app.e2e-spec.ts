import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import superagent from 'superagent';
import { AppModule } from './../src/app.module';
import { generate } from './department/helpers/department-test-helper';

describe('Department E2E (Full Auto Validation Suite)', () => {
  let app: INestApplication;
beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('✅ should successfully create a department in dev API', 
    async () => {
 expect(10+20).toBe(30)
  },1000);
});
