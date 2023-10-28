import Tippy from '@tippyjs/react';
import classNames from 'classnames';
import React, { useState } from 'react';
import { useAuthCurrentUser } from "react-devflikrauth-hooks";
import { LuChevronDown, LuChevronUp } from "react-icons/lu";
import { twMerge } from "tailwind-merge";
import UserAccounts from './UserAccounts';

export interface HeaderAvatarProps {
    children?: React.ReactNode;
}

function HeaderAvatar({ children }: HeaderAvatarProps) {
    const [user, loading] = useAuthCurrentUser();

    const [extend, setExtend] = useState(true);

    if (loading) return null;

    if (!user) return children;

    return (<>
        <Tippy content={`${user.firstname} ${user.lastname || ""}`.trim()}>
            <button className={twMerge(classNames(
                "rounded-full overflow-hidden w-10 h-10 hover:w-16 flex flex-nowrap items-center justify-between focus-visible:bg-[#0002] hover:bg-[#0002] transition-all p-1 text-lg group",
                {
                    "w-16 bg-indigo-100 shadow-[0_0_0_2px] shadow-indigo-200": extend,
                }
            ))} onClick={() => setExtend(!extend)}>
                <img src={user.profile} alt={user.username} className="h-full rounded-full" />
                <span className={twMerge(classNames(
                    "group-hover:scale-100 scale-0 transition-all mr-1",
                    {
                        "scale-100": extend,
                    }
                ))}>{extend ? <LuChevronUp /> : <LuChevronDown />}</span>
            </button>
        </Tippy >
        {extend && <div className="fixed top-16 right-3 py-3 max-h-[calc(100dvh_-_76px)] bg-white shadow-xl border border-gray-200 shadow-gray-300 w-[calc(100dvw_-_24px)] max-w-sm z-20 rounded-xl">
            <UserAccounts />
        </div>}
    </>);
}

export default HeaderAvatar;