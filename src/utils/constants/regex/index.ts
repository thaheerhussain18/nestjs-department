

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

export const FORM_VALIDATION = {
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
    }
}