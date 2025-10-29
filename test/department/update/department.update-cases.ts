
import { caseType, invalid_caseTypeEnum, validData } from '../utility-interfaces';
import { generate } from '../helpers/name-code-description-generator';
import { generateInvalidCase } from '../helpers/generate-invalid-case';
import { INestApplication } from '@nestjs/common';
import { postDepartment } from '../helpers/post-create';

export const departmentUpdateTests = () => {
    const cases: caseType[] = [
        {
            test_case_name: '✅14. Update all fields (valid)',
            dataUpdate: async (app: INestApplication) => {
                // create resource to update
                const createRes = await postDepartment(app, generate(true))
                const id:number = createRes.body?.id
                const payload = generate(true);
                return { id, ...payload };
            },
            expected: 200,
        },

        {
            test_case_name: '✅ 15.Partial update - only name',
            dataUpdate: async (app: INestApplication) => {
                const payload: validData = generate(true);
                const createRes = await postDepartment(app, payload);
                const id:number = createRes.body?.id
                const newName:string = generate(true).name;
                return { id, name: newName };
            },
            expected: 200,
        },

        {
            test_case_name: '✅ 16.Partial update - only code',
            dataUpdate: async (app: INestApplication) => {
                const createRes = await postDepartment(app, generate(true))
                const id:number = createRes.body?.id
                const newCode:string = generate(true).code;
                return { id, code: newCode };
            },

            expected: 200,
        },

        {
            test_case_name: '✅ 17.Partial update - only description',
            dataUpdate: async (app: INestApplication) => {
                const createRes = await postDepartment(app, generate(true))
                const id:number = createRes.body?.id
                const newDescription:string = generate(true).description;
                return { id, description: newDescription };
            },
            expected: 200,
        },

        {
            test_case_name: '❌18. Empty body {} (nothing to update)',
            dataUpdate: () => ({}),
            expected: 400,
        },

        {
            test_case_name: '❌19. Name too short (min)',
            dataUpdate: async (app: INestApplication) => {
                const createRes = await postDepartment(app, generate(true))
                const id:number = createRes.body?.id
                return { id, name: generateInvalidCase('NAME', invalid_caseTypeEnum.MIN).name };
            },
            expected: 400,
        },

        {
            test_case_name: '❌ 20.Name too long (max)',
            dataUpdate: async (app: INestApplication) => {
                const createRes = await postDepartment(app, generate(true))
                const id:number = createRes.body?.id
                return { id, name: generateInvalidCase('NAME', invalid_caseTypeEnum.MAX).name };
            },
            expected: 400,
        },

        {
            test_case_name: '❌21. Name invalid regex',
            dataUpdate: async (app: INestApplication) => {
                const createRes = await postDepartment(app, generate(true))
                const id:number = createRes.body?.id
                return { id, name: generateInvalidCase('NAME', invalid_caseTypeEnum.REGEX).name };
            },
            expected: 400,
        },

        {
            test_case_name: '❌ 22.Code too short (min)',
            dataUpdate: async (app: INestApplication) => {
                const createRes = await postDepartment(app, generate(true))
                const id:number = createRes.body?.id
                return { id, code: generateInvalidCase('CODE', invalid_caseTypeEnum.MIN).code };
            },
            expected: 400,
        },

        {
            test_case_name: '❌ 23.Code too long (max)',
            dataUpdate: async (app: INestApplication) => {
                const createRes = await postDepartment(app, generate(true))
                const id:number = createRes.body?.id
                return { id, code: generateInvalidCase('CODE', invalid_caseTypeEnum.MAX).code };
            },
            expected: 400,
        },

        {
            test_case_name: '❌ 24.Code invalid regex',
            dataUpdate: async (app: INestApplication) => {
                const createRes = await postDepartment(app, generate(true))
                const id:number = createRes.body?.id
                return { id, code: generateInvalidCase('CODE', invalid_caseTypeEnum.REGEX).code };
            },
            expected: 400,
        },

        {
            test_case_name: '❌25. Description too short (min)',
            dataUpdate: async (app: INestApplication) => {
                const createRes = await postDepartment(app, generate(true))
                const id:number = createRes.body?.id
                return { id, description: generateInvalidCase('DESCRIPTION', invalid_caseTypeEnum.MIN).description };
            },
            expected: 400,
        },

        {
            test_case_name: '❌ 26.Description too long (max)', dataUpdate: async (app: INestApplication) => {
                const createRes = await postDepartment(app, generate(true))
                // console.log('Create Response Body:', createRes.body);
                const id:number = createRes.body?.id
                return { id, description: generateInvalidCase('DESCRIPTION', invalid_caseTypeEnum.MAX).description };
            },
            expected: 400,
        },

        {
            test_case_name: '❌27. Non-existent id:number',
            dataUpdate: () => ({ id: 999999999, name: 'NoExist' }),
            expected: 400,
        },

        {
            test_case_name: '❌ 28.Duplicate name inside same license (should throw)',
            dataUpdate: async (app: INestApplication) => {
                const departmentResponse1 = await postDepartment(app, generate(true));
                const departmentResponse2 = await postDepartment(app, generate(true));
                return { id: departmentResponse2.body.id, name: departmentResponse1.body.name };
            },
            expected: 409,
        },

        {
            test_case_name: '❌ 29.Duplicate code inside same license (should throw)',
            dataUpdate: async (app: INestApplication) => {
                const departmentResponse1 = await postDepartment(app, generate(true));
                const departmentResponse2 = await postDepartment(app, generate(true));
                return { id: departmentResponse2.body.id, code: departmentResponse1.body.code };
            },
            expected: 409,
        },
        {
            test_case_name: '❌ 30.Duplicate name and code inside same license (should throw)',
            dataUpdate: async (app: INestApplication) => {
                const departmentResponse1 = await postDepartment(app, generate(true));
                const departmentResponse2 = await postDepartment(app, generate(true));
                return { id: departmentResponse2.body.id, name: departmentResponse1.body.name, code: departmentResponse1.body.code };
            },
            expected: 409,
        },

    ];

    return cases;
};

