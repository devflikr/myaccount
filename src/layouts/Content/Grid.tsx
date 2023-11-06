import classNames from 'classnames';
import React from 'react'
import { twMerge } from 'tailwind-merge';

export interface ContentGridProps extends React.HTMLAttributes<HTMLDivElement> {
    col?: 1 | "1" |
    2 | "2" |
    3 | "3" |
    4 | "4" |
    5 | "5" |
    5 | "5" |
    6 | "6" |
    7 | "7" |
    8 | "8" |
    9 | "9" |
    10 | "10" |
    11 | "11" |
    12 | "12";
}

// export const className = "grid-cols-1 grid-cols-2 grid-cols-3 grid-cols-4 grid-cols-5 grid-cols-6 grid-cols-7 grid-cols-8 grid-cols-9 grid-cols-10 grid-cols-11 grid-cols-12"

function ContentGrid({ col, className, ...props }: ContentGridProps) {
    return (
        <div className={twMerge(classNames(
            `grid grid-cols-${col} gap-1`,
            className,
        ))} {...props} />
    )
}

export default ContentGrid;