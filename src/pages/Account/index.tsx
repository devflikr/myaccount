import { useDocumentTitle } from 'react-unique-hooks';
import Content from '../../layouts/Content';
import { useAuthCurrentUser } from 'react-devflikrauth-hooks';
import formatDate from '../../core/utils/formatDate';
import InfoTab from './InfoTab';
import { BadgeCheck, BadgeX } from 'lucide-react';

function AccountPage() {

    const [user] = useAuthCurrentUser();

    useDocumentTitle("Account");

    if (!user) return null;

    return (
        <>
            <header className="flex flex-col gap-5 items-center">
                <img className="w-16 aspect-square" src="/assets/account.png" alt="Account" />
                <h1 className="text-gray-300 font-medium text-center">
                    <span className="text-red-600 text-2xl font-bold">Account</span><br />
                    Secure your account by frequently updating your account password.
                </h1>
            </header>
            <Content className="pt-5 my-10 px-2">
                <h2 className="mb-10 text-lg text-gray-300 px-5">Account Status</h2>
                <InfoTab
                    name="Account was created on"
                    value={formatDate(new Date(user.createdAt || ""))}
                />
                <InfoTab
                    name="Account was last updated on"
                    value={formatDate(new Date(user.updatedAt || ""))}
                />
                <InfoTab
                    name="Password was last updated on"
                    value={formatDate(new Date(user.passwordUpdatedAt || user.createdAt || ""))}
                />
                <InfoTab
                    name="Email verification status"
                    value={!user.isVerified ? <span className="text-green-500 inline-flex gap-5"><BadgeCheck /> Verified</span> : <span className="text-red-500 inline-flex gap-5"><BadgeX /> Unverified</span>}
                />
            </Content>
            <Content className="p-7 my-10 bg-[#f002] shadow-[0_0_0_2px_#f009]">
                <h2 className="mb-10 text-lg text-gray-300">Delete Account</h2>
                <h3 className="">Account Deletion will be made available soon.</h3>
            </Content>
        </>
    );
}

export default AccountPage;