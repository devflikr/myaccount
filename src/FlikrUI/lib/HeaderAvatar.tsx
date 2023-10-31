import Tippy from '@tippyjs/react';
import classNames from 'classnames';
import React, { useState } from 'react';
import { useAuthCurrentUser } from "react-devflikrauth-hooks";
import { LuChevronDown, LuChevronUp } from "react-icons/lu";
import { twMerge } from "tailwind-merge";
import ExtendUserAccounts from './ExtendUserAccounts';

export interface HeaderAvatarProps {
    children?: React.ReactNode;
}

function HeaderAvatar({ children }: HeaderAvatarProps) {
    const [user, loading] = useAuthCurrentUser();

    const [extend, setExtend] = useState(false);


    if (loading) return null;

    if (!user) return children;

    return (<>
        <Tippy content={`${user.firstname} ${user.lastname || ""}`.trim()}>
            <button className={twMerge(classNames(
                "rounded-full overflow-hidden w-16 h-10 flex flex-nowrap items-center justify-between focus-visible:cs-bg-3 hover:cs-bg-3 transition-all p-1 text-lg group",
                {
                    "cs-bg-3 shadow-[0_0_0_2px] shadow-[#fff4]": extend,
                }
            ))} onClick={() => setExtend(bool => !bool)}>
                <img src={user.profile} alt={user.username} className="h-full rounded-full" />
                <span className="mr-0">{extend ? <LuChevronUp /> : <LuChevronDown />}</span>
            </button>
        </Tippy >
        <ExtendUserAccounts extend={extend} setExtend={setExtend} />
    </>);
}

export default HeaderAvatar;
