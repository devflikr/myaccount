import classNames from 'classnames';
import React from 'react';
import { twMerge } from 'tailwind-merge';

export interface ContentProps extends React.HTMLAttributes<HTMLDivElement> {
}

function Content({ className, ...props }: ContentProps) {
    return (
        <div className={twMerge(classNames(
            "bg-[#fff1] rounded-lg transition-all",
            className,
        ))} {...props} />
    );
}

export default Content;