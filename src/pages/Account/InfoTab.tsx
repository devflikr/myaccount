import classNames from 'classnames';
import React from 'react';
import { twMerge } from 'tailwind-merge';

export interface InfoTabProps extends React.HTMLAttributes<HTMLDivElement> {
    name?: React.ReactNode;
    value?: React.ReactNode;
}

function InfoTab({ className, name, value, ...props }: InfoTabProps) {
    return (
        <div className={twMerge(classNames(
            "flex w-full flex-wrap items-center justify-between gap-5 py-3 px-5 hover:no-underline border-b-2 border-b-gray-950 last-of-type:border-b-0",
            className,
        ))} {...props}>
            <span className="font-bold">{name}</span>
            <span className="text-orange-400 font-bold">{value}</span>
        </div>
    );
}

export default InfoTab;