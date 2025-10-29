import { caseType, invalid_caseTypeEnum } from "../utility-interfaces";
import { generateInvalidCase } from "../helpers/department-test-helper";
import { generate } from "../helpers/department-test-helper";
import { CreateDepartmentTest } from "../helpers/department-test-helper";
// import { RESPONSE_CODES } from ".src/utils/constants/regex";
import {  ACTIONS, FEATURE, RESPONSE_CODES } from "../../../src/utils/constants/regex";
// RESPONSE_CODES
export const departmentCreateTests = () => {

    const cases: caseType[] = [
        {
            test_case_name: `${FEATURE.DEPARTMENT}-${ACTIONS.CREATE}-01 Valid data`,
            dataCreate: () => generate(true),
            expected:RESPONSE_CODES.SUCCESS, // RESPONSE_CODES.CREATED
        },
        {
            test_case_name: `${FEATURE.DEPARTMENT}-${ACTIONS.CREATE}-02  Missing name`,
            dataCreate: () => generateInvalidCase('NAME', invalid_caseTypeEnum.MISSING),
            expected: RESPONSE_CODES.CONFLICT_ERROR_CODE
        },
        {
            test_case_name: `${FEATURE.DEPARTMENT}-${ACTIONS.CREATE}-03 Missing code`,
            dataCreate: () => generateInvalidCase('CODE', invalid_caseTypeEnum.MISSING),
            expected: RESPONSE_CODES.CONFLICT_ERROR_CODE
        },
        {
            test_case_name: `${FEATURE.DEPARTMENT}-${ACTIONS.CREATE}-01 -04.Name too short'`,
            dataCreate: () => generateInvalidCase('NAME', invalid_caseTypeEnum.MIN),
            expected: RESPONSE_CODES.CONFLICT_ERROR_CODE
        },
        {
            test_case_name: `${FEATURE.DEPARTMENT}-${ACTIONS.CREATE}' -05.Name too long'`,
            dataCreate: () => generateInvalidCase('NAME', invalid_caseTypeEnum.MAX),
            expected: RESPONSE_CODES.CONFLICT_ERROR_CODE
        },
        {
            test_case_name: `${FEATURE.DEPARTMENT}-${ACTIONS.CREATE}' -06.Code too short'`,
            dataCreate: () => generateInvalidCase('CODE', invalid_caseTypeEnum.MIN),
            expected: RESPONSE_CODES.CONFLICT_ERROR_CODE
        },
        {
            test_case_name: ' -07.Code too long',
            dataCreate: () => generateInvalidCase('CODE', invalid_caseTypeEnum.MAX),
            expected: RESPONSE_CODES.CONFLICT_ERROR_CODE
        },
        {
            test_case_name: ' -08.Invalid name regex',
            dataCreate: () => generateInvalidCase('NAME', invalid_caseTypeEnum.REGEX),
            expected: RESPONSE_CODES.CONFLICT_ERROR_CODE
        },
        {
            test_case_name: ' -09.Invalid code regex',
            dataCreate: () => generateInvalidCase('CODE', invalid_caseTypeEnum.REGEX),
            expected: RESPONSE_CODES.CONFLICT_ERROR_CODE
        },
        {
            test_case_name: ' -10.Empty all fields',
            dataCreate: () => ({ name: '', code: '' }), expected: RESPONSE_CODES.CONFLICT_ERROR_CODE
        },
        {
            test_case_name: '-11. Duplicate name inside same license',
            dataCreate: async (app) => {
                const created = await CreateDepartmentTest(app, generate(true));

                return { name: created.body.name, code: generate(true).code,description:generate(true).description };
            },
            expected: RESPONSE_CODES.CONFLICT_ERROR_CODE
        },
        {
            test_case_name: ' -12.Duplicate code inside same license',
            dataCreate: async (app) => {
                const created = await CreateDepartmentTest(app, generate(true));
                return { name: generate(true).name, code: created.body.code ,description:generate(true).description };
            },
            expected: RESPONSE_CODES.CONFLICT_ERROR_CODE
        },
        {
            test_case_name: ' 13.should fail when department name & code already exists',
            dataCreate: async (app) => {
                const payload = generate(true);
                await CreateDepartmentTest(app, payload);
                return payload;
            }, expected: RESPONSE_CODES.CONFLICT_ERROR_CODE
        }

    ];

    return cases;
};
