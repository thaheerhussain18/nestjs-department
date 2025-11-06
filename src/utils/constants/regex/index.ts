

// export const REGEX = {
//     NAME: /^[A-Za-z0-9][A-Za-z0-9 _\-\.'()&@+]*$/,
//     CODE:
//     NAME_MIN_LENGTH:3,
//      NAME_MAX_LENGTH:50,
//     CODE_MAX_LENGTH:50,
//     CODE_MIN_LENGTH:3,
//     DESCRIPTION_MIN_LENGTH:3,
//     DESCRIPTION_MAX_LENGTH:1024,

// }

export const 
FORM_VALIDATION = {
    
    NAME:{
        REGEX:/^[A-Za-z0-9][A-Za-z0-9 _\-\.'()&@+]*$/,
        MIN_LENGTH:3,
        MAX_LENGTH:50
    },
    CODE:{
        REGEX:/^[A-Za-z0-9][A-Za-z0-9'_\-/\\]*$/,
        MIN_LENGTH:3,
        MAX_LENGTH:50,
    },
    DESCRIPTION:{
        MIN_LENGTH:3,
        MAX_LENGTH:1024
    },
    
}

export const RESPONSE_CODES={
    CONFLICT_ERROR_CODE:409,
    BAD_REQUEST_ERROR_CODE:400,
    CREATED:201,
    SUCCESS:200,
} as const;
export type RESPONSE_CODES_PROPS = typeof RESPONSE_CODES[keyof typeof RESPONSE_CODES];

export const FEATURE={
    DEPARTMENT:'DEPARTMENT',
    EMPLOYEE:'EMPLOYEE'
    
};



export const ACTIONS={
    CREATE:'CREATE',
    UPDATE:'UPDATE',
    DELETE:'DELETE',
    VIEW:'VIEW',
}

export type Action = typeof ACTIONS[keyof typeof ACTIONS];