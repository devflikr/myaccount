import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import useFormContext from './Form/useFormContext';
import { useNavigate } from 'react-router-dom';


const buttonVariants = cva("px-5 py-2 rounded-md border border-transparent transition-all font-semibold w-full max-w-xs", {
    variants: {
        as: {
            button: "bg-[#fff2] hover:bg-blue-700 focus-visible:bg-blue-700 text-white",
            submit: "bg-red-600 hover:bg-red-700 focus-visible:bg-red-700 text-white disabled:bg-gray-500",
            reset: "bg-[#fff1] border-[#fff1] hover:bg-[#fff4] text-white",
        },
        display: {
            block: "block w-3/4 mx-auto",
            inline: "inline-block",
        },
    },
    defaultVariants: {
        as: "button",
        display: "inline",
    },
});

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    to?: string;
    replace?: boolean;
}

function Button({ as, type, to, replace, onClick, display, disabled: defaultDisabled, children, ...props }: ButtonProps) {

    const navigate = useNavigate();

    const { disabled: formDisabled } = useFormContext();

    const disabled = formDisabled || defaultDisabled;

    function handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        onClick && onClick(e);
        to && navigate(to, { replace });
    }

    return (
        <button className={twMerge(clsx(buttonVariants({ as, display })))} onClick={handleClick} type={as || type || "button"} disabled={disabled} {...props}>{disabled ? <l-tailspin size="20" stroke="3" speed="1" color="white" /> : children}</button>
    )
}

export default Button;