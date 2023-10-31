// import React from 'react';
import { AiOutlineClose, AiOutlineUserAdd, AiOutlineUsergroupDelete } from 'react-icons/ai';
import { MdOutlineManageAccounts } from 'react-icons/md';
import { AnimatePresence, motion } from 'framer-motion';
import { useAuthCurrentUser, useAuthUsers, useSignOut } from "react-devflikrauth-hooks";
import useRedirectAuth from '../hooks/useRedirectAuth';
import UserLink from './UserLink';
import { useRef } from 'react';

export interface ExtendUserAccountsProps {
    extend: boolean;
    setExtend?: React.Dispatch<React.SetStateAction<boolean>>;
}

function ExtendUserAccounts({ extend, setExtend }: ExtendUserAccountsProps) {

    const signinLink = useRedirectAuth({ path: "signin" });
    const signOutLink = useSignOut();

    const [users] = useAuthUsers();
    const [user] = useAuthCurrentUser();

    const ref = useRef<HTMLDivElement>(null);

    // useClickOutside(ref, () => extend && setExtend?.(false), "mousedown");

    if (!user) return null;

    return (
        <AnimatePresence>
            {extend && <motion.div
                className="fixed sm:absolute inset-0 sm:inset-auto sm:top-20 sm:right-3 p-3 gap-4 h-full sm:h-auto sm:max-h-[calc(100dvh_-_96px)] cs-bg-1 cs-drop-3 cs-drop-c2 w-full sm:w-[calc(100dvw_-_24px)] sm:max-w-sm z-20 sm:rounded-xl flex flex-col items-stretch"
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 1,
                }}
                exit={{
                    opacity: 0,
                }}
                transition={{
                    duration: 0.2
                }}
                ref={ref}
            >
                <div className="flex flex-wrap items-center gap-5">
                    <div className="w-full min-w-[80px] max-w-[80px] aspect-square rounded-full overflow-hidden shadow-[0_0_0_2px] shadow-[#777]">
                        <img src={user.profile} alt={user.username} />
                    </div>
                    <div className="">
                        <div className="font-bold">{`${user.firstname} ${user.lastname || ""}`.trim()}</div>
                        <div className="text-gray-300">{user.email}</div>
                        <div className="text-xs font-bold text-gray-500">@{user.username}</div>
                    </div>
                    <button type="button" className="cs-b-round self-start ml-auto" onClick={() => setExtend?.(false)}><AiOutlineClose /></button>
                </div>
                <div>
                    <UserLink href={`/u/${user.index}`} text="Manage your Account" icon={<MdOutlineManageAccounts />} />
                </div>
                {users.length - 1 !== 0 && <div className="w-full overflow-auto no-scrollbar sm:flex-1 relative rounded-xl">
                    <div className="flex flex-col justify-center items-center">
                        {users.filter(u => u.uid !== user?.uid).map((user) => <UserLink
                            key={user.uid}
                            href={`/u/${user.index}`}
                            icon={<img src={user.profile} alt={user.username} />}
                            text={`${user.firstname} ${user.lastname || ""}`.trim()}
                            subtext={user.email}
                            username={user.username}
                        />)}
                    </div>
                </div>}
                <div>
                    <UserLink onClick={signinLink} text="Add another Account" icon={<AiOutlineUserAdd />} />
                    <UserLink onClick={signOutLink} text="Remove All Sessions" icon={<AiOutlineUsergroupDelete />} />
                </div>
            </motion.div>}
        </AnimatePresence>
    );
}

export default ExtendUserAccounts;