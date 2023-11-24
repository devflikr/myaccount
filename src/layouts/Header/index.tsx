import HeaderSearch from './Search';
import { useScrollPosition } from "react-unique-hooks";
import { twMerge } from 'tailwind-merge';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { BadgeHelp, Search } from 'lucide-react';
import Tippy from '@tippyjs/react';
import { HeaderApps, HeaderAvatar, useRedirectAuth } from 'flikrui';

function Header() {

    const signinLink = useRedirectAuth({ path: "signin" });
    const position = useScrollPosition();
    return (
        <header className={twMerge(classNames(
            "flex flex-nowrap items-center justify-between p-3 gap-5 sticky top-0 transition-all z-20",
            (position.y > 0 && " bg-[#070714]")
        ))}>
            <Link to="" className="inline-flex h-5">
                <img src="/banner.png" alt="DevFlikr" />
            </Link>
            <HeaderSearch />
            <div className="inline-flex items-center">
                <div className="inline-flex flex-nowrap gap-2 items-center">
                    <Tippy content="Search"><button type="button" className="cs-b-round inline-flex md:hidden"><Search size={20} absoluteStrokeWidth /></button></Tippy>
                    <Tippy content="Get help"><Link to={`https://support.devflikr.com/u/${/*user.index*/0}/myaccount?ref=myaccount`} className="cs-b-round"><BadgeHelp size={20} absoluteStrokeWidth /></Link></Tippy>
                    <HeaderApps className="cs-b-round" />
                    <HeaderAvatar>
                        <button className="cs-bg-3 hover:cs-bg-4 transition-all text-white px-5 py-2 rounded" onClick={signinLink}>Sign in</button>
                    </HeaderAvatar>
                </div>
            </div>
        </header>
    )
}

export default Header;