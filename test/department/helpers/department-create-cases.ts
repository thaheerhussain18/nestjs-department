
import { FORM_VALIDATION } from '../../../src/utils/constants/regex';
import { generateRandomDescription } from '../../utils/generate-random-description';
import { generateRandomRegexString } from '../../utils/generate-random-regex-string';


export function generate(isValid = true) {
    return {
        name: generateRandomRegexString({
            regex: FORM_VALIDATION.NAME.REGEX,
            minLength: FORM_VALIDATION.NAME.MIN_LENGTH,
            maxLength: FORM_VALIDATION.NAME.MAX_LENGTH,
            isValid,
        }),
        code: generateRandomRegexString({
            regex: FORM_VALIDATION.CODE.REGEX,
            minLength: FORM_VALIDATION.CODE.MIN_LENGTH,
            maxLength: FORM_VALIDATION.CODE.MAX_LENGTH,
            isValid,
        }),
        description: isValid
            ? generateRandomDescription(
                FORM_VALIDATION.DESCRIPTION.MIN_LENGTH,
                FORM_VALIDATION.DESCRIPTION.MAX_LENGTH,
            )
            : '',
    };
}

export const generateInvalidCase = (
    field: keyof typeof FORM_VALIDATION,
    type: 'min' | 'max' | 'regex' | 'missing',
) => {
    const valid = generate(true);
    const rule = FORM_VALIDATION[field];
    const regex = 'REGEX' in rule ? rule.REGEX : /.*/;

    let brokenValue = '';

    switch (type) {
        case 'min':
            brokenValue = generateRandomRegexString({
                regex,
                minLength: 1,
                maxLength: Math.max(1, rule.MIN_LENGTH - 1),
                isValid: true,
            });
            break;
        case 'max':
            brokenValue = generateRandomRegexString({
                regex,
                minLength: rule.MAX_LENGTH + 1,
                maxLength: rule.MAX_LENGTH + 10,
                isValid: true,
            });
            break;
        case 'regex':
            brokenValue = generateRandomRegexString({
                regex,
                minLength: rule.MIN_LENGTH,
                maxLength: rule.MAX_LENGTH,
                isValid: false,
            });
            break;
        case 'missing':
            brokenValue = '';
            break;
    }

    // console.log(valid+"--valid", field+"--field", type+"--type", brokenValue+"-----------------------------------------------");
    return { ...valid, [field.toLowerCase()]: brokenValue };
};


export const departmentCreateTests = () => {
    const cases = [
        { test_case_name: '✅ Valid data', data: () => generate(true), expected: 201 },
        { test_case_name: '❌ Missing name', data: () => generateInvalidCase('NAME', 'missing'), expected: 400 },
        { test_case_name: '❌ Missing code', data: () => generateInvalidCase('CODE', 'missing'), expected: 400 },
        { test_case_name: '❌ Name too short', data: () => generateInvalidCase('NAME', 'min'), expected: 400 },
        { test_case_name: '❌ Name too long', data: () => generateInvalidCase('NAME', 'max'), expected: 400 },
        { test_case_name: '❌ Code too short', data: () => generateInvalidCase('CODE', 'min'), expected: 400 },
        { test_case_name: '❌ Code too long', data: () => generateInvalidCase('CODE', 'max'), expected: 400 },
        { test_case_name: '❌ Invalid name regex', data: () => generateInvalidCase('NAME', 'regex'), expected: 400 },
        { test_case_name: '❌ Invalid code regex', data: () => generateInvalidCase('CODE', 'regex'), expected: 400 },
        { test_case_name: '❌ Empty all fields', data: () => ({ name: '', code: ''}), expected: 400 },
    ];

    return cases; 
};
