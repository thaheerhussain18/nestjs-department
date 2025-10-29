import { FORM_VALIDATION } from "../../../src/utils/constants/regex";
import { invalid_caseTypeEnum, validData } from "../utility-interfaces";
import { generateRandomRegexString } from "../../../test/utils/generate-random-regex-string";
import { INestApplication } from "@nestjs/common";
import request from "supertest";
import { generateRandomDescription } from "../../../test/utils/generate-random-description";
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

export async function  CreateDepartmentTest(app: INestApplication,payload:validData) {

    return await request(app.getHttpServer())
        .post('/department')
        .send(payload);
}

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