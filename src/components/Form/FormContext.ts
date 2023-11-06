import React from "react";

export type FormSetter<T> = (key: keyof T, value: string) => void;

export type FormContextValue = {
    values: FormValues;
    errors: FormErrors;
    setValues: FormSetter<FormValues>;
    setErrors: FormSetter<FormErrors>;
    disabled: boolean;
};

export type FormValues = {
    firstname?: string;
    lastname?: string;
    username?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
    oldPassword?: string;
    birthday?: string;
    gender?: string;
    phone?: string;
};

export type FormErrors = FormValues & {
    default?: string;
};

export const FormErrorKeys = ["firstname", "lastname", "username", "email", "password", "confirmPassword", "oldPassword", "birthday", "gender", "phone"];

const FormContext = React.createContext<FormContextValue>({
    values: {},
    errors: {},
    setValues: () => { },
    setErrors: () => { },
    disabled: true,
});

export default FormContext;

