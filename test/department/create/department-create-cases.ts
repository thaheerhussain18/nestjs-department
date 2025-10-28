import { caseType, invalid_caseTypeEnum } from "../utility-interfaces";
import { generateInvalidCase } from "../helpers/generate-invalid-case";
import { generate } from "../helpers/name-code-description-generator";
import request from "supertest";
import { INestApplication } from "@nestjs/common";
export const departmentCreateTests = () => {

    const cases:caseType[] = [
        { test_case_name: '✅ 1.Valid data', dataCreate: () => generate(true), expected: 201 },
        { test_case_name: '❌ 2.Missing name', dataCreate: () => generateInvalidCase('NAME',invalid_caseTypeEnum.MISSING ), expected: 400 },
        { test_case_name: '❌ 3.Missing code', dataCreate: () => generateInvalidCase('CODE', invalid_caseTypeEnum.MISSING), expected: 400 },
        { test_case_name: '❌ 4.Name too short', dataCreate: () => generateInvalidCase('NAME', invalid_caseTypeEnum.MIN), expected: 400 },
        { test_case_name: '❌ 5.Name too long', dataCreate: () => generateInvalidCase('NAME', invalid_caseTypeEnum.MAX), expected: 400 },
        { test_case_name: '❌ 6.Code too short', dataCreate: () => generateInvalidCase('CODE', invalid_caseTypeEnum.MIN), expected: 400 },
        { test_case_name: '❌ 7.Code too long', dataCreate: () => generateInvalidCase('CODE', invalid_caseTypeEnum.MAX),expected:400 },
        { test_case_name: '❌ 8.Invalid name regex', dataCreate: () => generateInvalidCase('NAME', invalid_caseTypeEnum.REGEX), expected: 400 },
        { test_case_name: '❌ 9.Invalid code regex', dataCreate: () => generateInvalidCase('CODE', invalid_caseTypeEnum.REGEX), expected: 400 },
        { test_case_name: '❌ 10.Empty all fields', dataCreate: () => ({ name: '', code: ''}), expected: 400 },
        {
            test_case_name: '❌11. Duplicate name inside same license',
            dataCreate: async (app) => {
                const created = await request(app.getHttpServer())
                    .post('/department')
                    .send(generate(true));
                return { name: created.body.name, code: generate(true).code }; 
            },
            expected: 409
        },
        {
            test_case_name: '❌ 12.Duplicate code inside same license',
            dataCreate: async (app) => {
                const created = await request(app.getHttpServer())
                    .post('/department')
                    .send(generate(true));
                return { name: generate(true).name, code: created.body.code }; 
            },
            expected: 409
        },
        {
            test_case_name:'❌ 13.should fail when department name & code already exists',dataCreate:async(app)=>{
                const payload = generate(true);
                await request(app.getHttpServer())
                    .post('/department')
                    .send(payload);
                return payload; 
                },expected:409}
        
    ];

    return cases; 
} ;
