import { FORM_VALIDATION } from "../../../src/utils/constants/regex";
import { generateRandomRegexString } from "../../../test/utils/generate-random-regex-string";
import { invalid_caseTypeEnum } from "../utility-interfaces";
import { generate } from "./name-code-description-generator";



export const generateInvalidCase = (
    field: keyof typeof FORM_VALIDATION,
    invalid_case: invalid_caseTypeEnum,
) => {
    const valid = generate(true);
    const rule = FORM_VALIDATION[field];
    const regex = 'REGEX' in rule ? rule.REGEX : /.*/;

    let brokenValue = '';

    switch (invalid_case) {
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