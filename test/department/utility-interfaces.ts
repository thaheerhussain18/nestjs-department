import { INestApplication } from "@nestjs/common";
import { RESPONSE_CODES_PROPS } from "../../src/utils/constants/regex";


export interface caseType {
    test_case_name: string;
    dataCreate?: ((app: INestApplication) => Promise<any>) | (() => any);
    dataUpdate?: (app: INestApplication) => Promise<validData> | any;
    expected: RESPONSE_CODES_PROPS;
}



// export interface invalid_caseType {type:'min' | 'max' | 'regex' | 'missing'};

export enum invalid_caseTypeEnum {
    MIN='min',
    MAX='max',
    REGEX='regex',
    MISSING='missing'
}

export interface validData{
    id?:number;
    name?:string;
    code?:string;
    description?:string;
}