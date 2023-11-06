import React from 'react';
import uuid from '../core/utils/uuid';
import { twMerge } from 'tailwind-merge';
import useFormContext from './Form/useFormContext';
import { FormValues } from './Form/FormContext';
import classNames from 'classnames';
import ErrorBox from './ErrorBox';
import { useEffectOnce, useUpdateEffect } from 'react-unique-hooks';

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    label?: React.ReactNode;
}

function Select({ id, name, label, placeholder, onChange, defaultValue, ...props }: SelectProps) {
    const uid = (id || name || uuid()) as keyof FormValues;

    const [value, setValue] = React.useState<string>((defaultValue as string) || "");

    const { setValues, errors, disabled } = useFormContext();

    useUpdateEffect(() => {
        setValue(defaultValue as string || "");
        setValues(uid, defaultValue as string || "");
    }, [defaultValue]);

    function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
        const value = e.target.value;
        setValue(value);
        setValues(uid, value);
        onChange?.(e);
    }

    useEffectOnce(() => {
        setValues(uid, value);
    });

    return (
        <fieldset className="relative w-full flex flex-col-reverse p-3" disabled={disabled}>
            <ErrorBox name={uid} />
            <select onChange={handleChange} value={value} className={twMerge(classNames(
                "bg-[#fff1] rounded-lg outline-none px-5 py-3 max-w-none transition-all duration-150 peer disabled:opacity-75 disabled:text-gray-400",
                {
                    "bg-[#00f1] focus-visible:bg-[#00f1]": errors[uid],
                },
            ))} {...{ id: uid, name: uid }} {...props} placeholder={placeholder || ""} />
            <label htmlFor={uid} className={twMerge(classNames(
                "line-clamp-1 max-w-[calc(100%_-_calc(2_*_2_*_4px))] px-2 pb-2 font-semibold transition-all duration-150",
                "text-gray-500 peer-focus-visible:text-blue-700",
                {
                    "text-red-600 peer-focus-visible:text-red-600": errors[uid],
                }
            ))}>{label}</label>
        </fieldset>
    )
}

export default Select;