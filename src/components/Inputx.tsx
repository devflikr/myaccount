import classNames from 'classnames';
import React, { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import uuid from '../core/utils/uuid';

export interface EditorProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: React.ReactNode;
    value: string;
}

function Editor({ label, className, id, name, value: defValue, ...props }: EditorProps) {

    const [value, setValue] = useState(defValue);

    const itemId = (id || name || uuid()) as string;

    return (
        <fieldset className="flex w-full flex-col p-5 container">
            <label htmlFor={itemId} className="pb-2 pl-2">{label}</label>
            <input className={twMerge(classNames(
                "bg-[#fff1] rounded-lg outline-none px-5 py-3 max-w-none",
                className,
            ))} id={itemId} value={value} onChange={({ target }) => setValue(target.value)} name={itemId} {...props} />
        </fieldset>
    )
}

export default Editor;