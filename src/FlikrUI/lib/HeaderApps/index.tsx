import Tippy from '@tippyjs/react';
import { Grip } from 'lucide-react';
import React, { useState } from 'react';
import ExtendUserApps from './ExtendUserApps';
import { twMerge } from 'tailwind-merge';
import classNames from 'classnames';

export interface HeaderAppsProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {

}

function HeaderApps({ className, ...props }: HeaderAppsProps) {
    const [extend, setExtend] = useState(false);
    return (
        <>
            <Tippy content="Apps">
                <button type="button" className={twMerge(classNames(
                    "",
                    (extend && "shadow-[0_0_0_2px_#fff3] bg-[#fff1]"),
                    className,
                ))} {...props} onClick={() => setExtend(ext => !ext)}><Grip size={20} absoluteStrokeWidth /></button>
                </Tippy>
            <ExtendUserApps extend={extend} setExtend={setExtend} />
        </>
    );
}

export default HeaderApps;