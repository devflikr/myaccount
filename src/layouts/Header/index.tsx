import React from 'react';
import HeaderSearch from './Search';
import HeaderAvatar from '../../FlikrUI/lib/HeaderAvatar';
import useRedirectAuth from '../../FlikrUI/hooks/useRedirectAuth';

function Header() {

    const signinLink = useRedirectAuth({ path: "signin" });
    return (
        <header className="flex flex-nowrap items-center px-5 py-2 gap-5">
            <div className="inline-flex h-8">
                <img src="/banner.png" alt="DevFlikr" />
            </div>
            <HeaderSearch />
            <div className="inline-flex-flex-nowrap gap-2 ml-auto">
                <HeaderAvatar>
                    <button className="bg-blue-700 text-white px-5 py-2 rounded " onClick={signinLink}>Sign in</button>
                </HeaderAvatar>
            </div>
        </header>
    )
}

export default Header;