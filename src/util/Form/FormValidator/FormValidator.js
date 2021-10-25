import {EMAIL, MIN_LENGTH, REQUIRED} from "../../../constants/validation.errors";

export const formValidate = (params, formData) => {
    let formErrors = {};

    for (const field in formData) {
        formErrors[field] = formFieldValidate(field, formData[field], params[field]);
    }

    return formErrors;
}

export const formFieldValidate = (name, value, params) => {
    let error = [];

    if (params?.required && value === '') {
        error = [REQUIRED];
    }

    if (params?.email && !value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
        error = [EMAIL];
    }

    if (params?.minLength && ( value.length < params?.minLength )) {
        console.log(value)
        error = [MIN_LENGTH(params.minLength)];
    }

    return error;
}