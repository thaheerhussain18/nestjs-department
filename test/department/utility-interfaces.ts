
export interface caseType {
    test_case_name: string;
    data: () => any;
    expected: number;
}



// export interface invalid_caseType {type:'min' | 'max' | 'regex' | 'missing'};

export enum invalid_caseTypeEnum {
    MIN='min',
    MAX='max',
    REGEX='regex',
    MISSING='missing'
}