// import React from 'react';
import { useAuthCurrentUser, useAuthUsers } from "react-devflikrauth-hooks";

function UserAccounts() {

    const [user] = useAuthCurrentUser();

    const [users] = useAuthUsers();


    return (
        <>
            <ul className="flex flex-col flex-nowrap w-full">
                {users.filter(u => u.uid !== user?.uid).map((user) => <Account
                    key={user.uid}
                    name={user.firstname + " " + (user.lastname || "")}
                    email={user.email}
                    profile={user.profile}
                    index={user?.index}
                />)}
                {/* <Account
                    key="auth-chooser-add-account"
                    name="Use Another Account"
                    profile={"/assets/user-add.png"}
                /> */}
            </ul>
        </>
    )
}

export default UserAccounts;

export interface AccountProps {
    name?: string;
    email?: string;
    profile?: string;
    index: number;
}

function Account({ name, email, profile, index }: AccountProps) {

    return (
        <li>
            <a href={`/?auth=${index}`} target="_blank" rel="noopener noreferrer" className="w-full block px-2 sm:px-6 hover:bg-blue-50 focus-within:bg-blue-100 active:bg-blue-100 transition-all hover:no-underline">
                <span className="w-full flex flex-row flex-nowrap items-center gap-3 border-b border-b-gray-300 p-2 [li:last-of-type>button>&]:border-b-0">
                    <span className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center">
                        <img className="rounded-full max-w-full max-h-full" src={profile || `http://localhost:8978/userprofile/${name}`} alt={name} />
                    </span>
                    <span className="block text-left leading-4">
                        <span className="block w-full line-clamp-1 font-bold text-gray-900">{name}</span>
                        <span className="block w-full line-clamp-1 text-sm font-semibold text-gray-600">{email}</span>
                    </span>
                </span>
            </a>
        </li>
    );
}