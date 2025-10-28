
import request from 'supertest';
import { caseType, invalid_caseTypeEnum } from '../utility-interfaces';
import { generate } from '../helpers/name-code-description-generator';
import { generateInvalidCase } from '../helpers/generate-invalid-case';
import { INestApplication } from '@nestjs/common';



/**
 * Update test cases array.
 *
 * Each case's `data` may be:
 *  - a plain object `{ id, name?, code?, description? }` (synchronous)
 *  - an async function `(app) => ({ id, ...payload })` which will create a resource first
 *
 * Note: Endpoint is PATCH /department/:id and partial updates are allowed.
 */
export const departmentUpdateTests = () => {
    const cases:caseType[] = [
        {
             
            test_case_name: '✅ Update all fields (valid)',
            dataUpdate: async (app: INestApplication) => {
                // create resource to update
                const createRes = await request(app.getHttpServer())
                    .post('/department')
                    .send(generate(true));
                const id =
                    createRes.body?.id ?? createRes.body?.data?.id ?? createRes.body?.created?.id ?? createRes.body?.department?.id;
                const payload = generate(true);
                return { id, ...payload };
            },
            expected: 200,
        },

        {
            test_case_name: '✅ Partial update - only name',
            dataUpdate: async (app: INestApplication) => {
                const createRes = await request(app.getHttpServer())
                    .post('/department')
                    .send(generate(true));
                const id =
                    createRes.body?.id ?? createRes.body?.data?.id ?? createRes.body?.created?.id ?? createRes.body?.department?.id;
                const newName = generate(true).name;
                return { id, name: newName };
            },
            expected: 200,
        },

        {
            test_case_name: '✅ Partial update - only code',
            dataUpdate: async (app: INestApplication) => {
                const createRes = await request(app.getHttpServer())
                    .post('/department')
                    .send(generate(true));
                const id =
                    createRes.body?.id ?? createRes.body?.data?.id ?? createRes.body?.created?.id ?? createRes.body?.department?.id;
                const newCode = generate(true).code;
                return { id, code: newCode };
            },
            expected: 200,
        },

        {
            test_case_name: '✅ Partial update - only description',
            dataUpdate: async (app: INestApplication) => {
                const createRes = await request(app.getHttpServer())
                    .post('/department')
                    .send(generate(true));
                const id =
                    createRes.body?.id ?? createRes.body?.data?.id ?? createRes.body?.created?.id ?? createRes.body?.department?.id;
                const newDescription = generate(true).description;
                return { id, description: newDescription };
            },
            expected: 200,
        },

        {
            test_case_name: '❌ Empty body {} (nothing to update)',
            dataUpdate: () => ({}), // test harness will interpret missing id as non-existent - this case handled separately below
            expected: 400,
        },

        {
            test_case_name: '❌ Name too short (min)',
            dataUpdate: async (app: INestApplication) => {
                const createRes = await request(app.getHttpServer())
                    .post('/department')
                    .send(generate(true));
                const id =
                    createRes.body?.id ?? createRes.body?.data?.id ?? createRes.body?.created?.id ?? createRes.body?.department?.id;
                return { id, name: generateInvalidCase('NAME', invalid_caseTypeEnum.MIN).name };
            },
            expected: 400,
        },

        {
            test_case_name: '❌ Name too long (max)',
            dataUpdate: async (app: INestApplication) => {
                const createRes = await request(app.getHttpServer())
                    .post('/department')
                    .send(generate(true));
                const id =
                    createRes.body?.id ?? createRes.body?.data?.id ?? createRes.body?.created?.id ?? createRes.body?.department?.id;
                return { id, name: generateInvalidCase('NAME', invalid_caseTypeEnum.MAX).name };
            },
            expected: 400,
        },

        {
            test_case_name: '❌ Name invalid regex',
            dataUpdate: async (app: INestApplication) => {
                const createRes = await request(app.getHttpServer())
                    .post('/department')
                    .send(generate(true));
                const id =
                    createRes.body?.id ?? createRes.body?.data?.id ?? createRes.body?.created?.id ?? createRes.body?.department?.id;
                return { id, name: generateInvalidCase('NAME', invalid_caseTypeEnum.REGEX).name };
            },
            expected: 400,
        },

        {
            test_case_name: '❌ Code too short (min)',
            dataUpdate: async (app: INestApplication) => {
                const createRes = await request(app.getHttpServer())
                    .post('/department')
                    .send(generate(true));
                const id =
                    createRes.body?.id ?? createRes.body?.data?.id ?? createRes.body?.created?.id ?? createRes.body?.department?.id;
                return { id, code: generateInvalidCase('CODE', invalid_caseTypeEnum.MIN).code };
            },
            expected: 400,
        },

        {
            test_case_name: '❌ Code too long (max)',
            dataUpdate: async (app: INestApplication) => {
                const createRes = await request(app.getHttpServer())
                    .post('/department')
                    .send(generate(true));
                const id =
                    createRes.body?.id ?? createRes.body?.data?.id ?? createRes.body?.created?.id ?? createRes.body?.department?.id;
                return { id, code: generateInvalidCase('CODE', invalid_caseTypeEnum.MAX).code };
            },
            expected: 400,
        },

        {
            test_case_name: '❌ Code invalid regex',
            dataUpdate: async (app: INestApplication) => {
                const createRes = await request(app.getHttpServer())
                    .post('/department')
                    .send(generate(true));
                const id =
                    createRes.body?.id ?? createRes.body?.data?.id ?? createRes.body?.created?.id ?? createRes.body?.department?.id;
                return { id, code: generateInvalidCase('CODE', invalid_caseTypeEnum.REGEX).code };
            },
            expected: 400,
        },

        {
            test_case_name: '❌ Description too short (min)',
            dataUpdate: async (app: INestApplication) => {
                const createRes = await request(app.getHttpServer())
                    .post('/department')
                    .send(generate(true));
                const id =
                    createRes.body?.id ?? createRes.body?.data?.id ?? createRes.body?.created?.id ?? createRes.body?.department?.id;
                return { id, description: generateInvalidCase('DESCRIPTION', invalid_caseTypeEnum.MIN).description };
            },
            expected: 400,
        },

        {
            test_case_name: '❌ Description too long (max)',dataUpdate: async (app: INestApplication) => {
                const createRes = await request(app.getHttpServer())
                    .post('/department')
                    .send(generate(true));
                const id =
                    createRes.body?.id ?? createRes.body?.data?.id ?? createRes.body?.created?.id ?? createRes.body?.department?.id;
                return { id, description: generateInvalidCase('DESCRIPTION', invalid_caseTypeEnum.MAX).description };
            },
            expected: 400,
        },

        {
            test_case_name: '❌ Non-existent id',
            dataUpdate: () =>  ({ id: 999999999, name: 'NoExist' }),
            expected: 400,
        },
    ];

    return cases;
};
