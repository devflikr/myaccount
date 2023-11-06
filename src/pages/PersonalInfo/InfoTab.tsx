import classNames from 'classnames';
import { ChevronRight, ExternalLink } from 'lucide-react';
import React from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

export interface InfoTabProps extends LinkProps {
    name?: React.ReactNode;
    value?: React.ReactNode;
    icon?: "go" | "tab";
}

function InfoTab({ className, name, value, icon = "go", ...props }: InfoTabProps) {
    return (
        <Link className={twMerge(classNames(
            "flex w-full flex-nowrap items-center gap-5 py-3 px-5 hover:no-underline border-b-2 border-b-gray-950 last-of-type:border-b-0",
            "hover:bg-[#fff1] transition-all",
            className,
        ))} {...props}>
            <span className="font-bold flex-1">{name}</span>
            <span className="text-gray-400">{value}</span>
            <span className="scale-75">{
                icon === "go" ? <ChevronRight /> :
                    icon === "tab" ? <ExternalLink /> : null
            }</span>
        </Link>
    );
}

export default InfoTab;