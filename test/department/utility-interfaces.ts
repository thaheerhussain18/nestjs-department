
export interface caseType {
    test_case_name: string;
    datacreate?:  () =>   any;
    dataUpdate?:  (app) =>   Promise<validData> | any;
    expected: number;
}



// export interface invalid_caseType {type:'min' | 'max' | 'regex' | 'missing'};

export enum invalid_caseTypeEnum {
    MIN='min',
    MAX='max',
    REGEX='regex',
    MISSING='missing'
}

export interface validData{
    name:string;
    code:string;
    description:string;
}