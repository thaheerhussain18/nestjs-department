import { caseType, invalid_caseTypeEnum } from "../utility-interfaces";
import { generateInvalidCase, generate, CreateDepartmentTest } from "../helpers/department-test-helper";
import { ACTIONS, FEATURE, RESPONSE_CODES } from "../../../src/utils/constants/regex";

export const departmentCreateTests = (): caseType[] => [
    {
        test_case_name: `${FEATURE.DEPARTMENT}-${ACTIONS.CREATE}-01 Valid data`,
        dataCreate: () => generate(true),
        expected: RESPONSE_CODES.CREATED,
    },
    {
        test_case_name: `${FEATURE.DEPARTMENT}-${ACTIONS.CREATE}-02 Missing name`,
        dataCreate: () => generateInvalidCase('NAME', invalid_caseTypeEnum.MISSING),
        expected: RESPONSE_CODES.CONFLICT_ERROR_CODE,
    },
    {
        test_case_name: `${FEATURE.DEPARTMENT}-${ACTIONS.CREATE}-03 Missing code`,
        dataCreate: () => generateInvalidCase('CODE', invalid_caseTypeEnum.MISSING),
        expected: RESPONSE_CODES.CONFLICT_ERROR_CODE,
    },
    {
        test_case_name: `${FEATURE.DEPARTMENT}-${ACTIONS.CREATE}-04 Name too short`,
        dataCreate: () => generateInvalidCase('NAME', invalid_caseTypeEnum.MIN),
        expected: RESPONSE_CODES.CONFLICT_ERROR_CODE,
    },
    {
        test_case_name: `${FEATURE.DEPARTMENT}-${ACTIONS.CREATE}-05 Name too long`,
        dataCreate: () => generateInvalidCase('NAME', invalid_caseTypeEnum.MAX),
        expected: RESPONSE_CODES.CONFLICT_ERROR_CODE,
    },
    {
        test_case_name: `${FEATURE.DEPARTMENT}-${ACTIONS.CREATE}-06 Code too short`,
        dataCreate: () => generateInvalidCase('CODE', invalid_caseTypeEnum.MIN),
        expected: RESPONSE_CODES.CONFLICT_ERROR_CODE,
    },
    {
        test_case_name: `${FEATURE.DEPARTMENT}-${ACTIONS.CREATE}-07 Code too long`,
        dataCreate: () => generateInvalidCase('CODE', invalid_caseTypeEnum.MAX),
        expected: RESPONSE_CODES.CONFLICT_ERROR_CODE,
    },
    {
        test_case_name: `${FEATURE.DEPARTMENT}-${ACTIONS.CREATE}-08 Invalid name regex`,
        dataCreate: () => generateInvalidCase('NAME', invalid_caseTypeEnum.REGEX),
        expected: RESPONSE_CODES.CONFLICT_ERROR_CODE,
    },
    {
        test_case_name: `${FEATURE.DEPARTMENT}-${ACTIONS.CREATE}-09 Invalid code regex`,
        dataCreate: () => generateInvalidCase('CODE', invalid_caseTypeEnum.REGEX),
        expected: RESPONSE_CODES.CONFLICT_ERROR_CODE,
    },
    {
        test_case_name: `${FEATURE.DEPARTMENT}-${ACTIONS.CREATE}-10 Empty all fields`,
        dataCreate: () => ({ name: '', code: '' }),
        expected: RESPONSE_CODES.CONFLICT_ERROR_CODE,
    },
    {
        test_case_name: `${FEATURE.DEPARTMENT}-${ACTIONS.CREATE}-11 Duplicate name inside same license`,
        dataCreate: async (app) => {
            const created = await CreateDepartmentTest(app, generate(true));
            return {
                name: created.body.name,
                code: generate(true).code,
                description: generate(true).description,
            };
        },
        expected: RESPONSE_CODES.CONFLICT_ERROR_CODE,
    },
    {
        test_case_name: `${FEATURE.DEPARTMENT}-${ACTIONS.CREATE}-12 Duplicate code inside same license`,
        dataCreate: async (app) => {
            const created = await CreateDepartmentTest(app, generate(true));
            return {
                name: generate(true).name,
                code: created.body.code,
                description: generate(true).description,
            };
        },
        expected: RESPONSE_CODES.CONFLICT_ERROR_CODE,
    },
    {
        test_case_name: `${FEATURE.DEPARTMENT}-${ACTIONS.CREATE}-13 Duplicate name & code inside same license`,
        dataCreate: async (app) => {
            const payload = generate(true);
            await CreateDepartmentTest(app, payload);
            return payload;
        },
        expected: RESPONSE_CODES.CONFLICT_ERROR_CODE,
    },
];
