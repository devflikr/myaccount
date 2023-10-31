import classNames from 'classnames';
import React, { useEffect, useRef, useState } from 'react'
import { Link, LinkProps, useLocation } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

export interface SideButtonProps extends LinkProps {
    icon: React.ReactNode;
    name: React.ReactNode;
}

function SideButton({ icon, name, to, className, ...props }: SideButtonProps) {
    const location = useLocation();

    const linkRef = useRef<HTMLAnchorElement>(null);

    const [active, setActive] = useState(false);

    useEffect(() => {
        linkRef.current?.href && setActive((new URL(linkRef.current.href)).pathname === location.pathname);
    }, [location.pathname]);
    return (
        <Link to={to} ref={linkRef} className={twMerge(classNames(
            "flex gap-5 px-5 py-3 hover:no-underline hover:text-red-500 transition-all rounded-r-full",
            {
                "bg-red-600 hover:text-white": active,
            },
            className
        ))} {...props}>
            <span className="scale-75">{icon}</span>
            <span className="">{name}</span>
        </Link>
    )
}

export default SideButton;