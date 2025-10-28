import { caseType, invalid_caseTypeEnum } from "../utility-interfaces";
import { generateInvalidCase } from "../helpers/generate-invalid-case";
import { generate } from "../helpers/name-code-description-generator";







export const departmentCreateTests = () => {
    const cases:caseType[] = [
        { test_case_name: '✅ Valid data', data: () => generate(true), expected: 201 },
        { test_case_name: '❌ Missing name', data: () => generateInvalidCase('NAME',invalid_caseTypeEnum.MISSING ), expected: 400 },
        { test_case_name: '❌ Missing code', data: () => generateInvalidCase('CODE', invalid_caseTypeEnum.MISSING), expected: 400 },
        { test_case_name: '❌ Name too short', data: () => generateInvalidCase('NAME', invalid_caseTypeEnum.MIN), expected: 400 },
        { test_case_name: '❌ Name too long', data: () => generateInvalidCase('NAME', invalid_caseTypeEnum.MAX), expected: 400 },
        { test_case_name: '❌ Code too short', data: () => generateInvalidCase('CODE', invalid_caseTypeEnum.MIN), expected: 400 },
        { test_case_name: '❌ Code too long', data: () => generateInvalidCase('CODE', invalid_caseTypeEnum.MAX),expected:400 },
        { test_case_name: '❌ Invalid name regex', data: () => generateInvalidCase('NAME', invalid_caseTypeEnum.REGEX), expected: 400 },
        { test_case_name: '❌ Invalid code regex', data: () => generateInvalidCase('CODE', invalid_caseTypeEnum.REGEX), expected: 400 },
        { test_case_name: '❌ Empty all fields', data: () => ({ name: '', code: ''}), expected: 400 },
    ];

    return cases; 
};
