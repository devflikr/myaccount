import HeaderSearch from './Search';
import HeaderAvatar from '../../FlikrUI/lib/HeaderAvatar';
import useRedirectAuth from '../../FlikrUI/hooks/useRedirectAuth';
import { TbHelpHexagon } from "react-icons/tb";
import { AiOutlineSearch } from 'react-icons/ai';
import { useScrollPosition } from "react-unique-hooks";
import { twMerge } from 'tailwind-merge';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

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
                <div className="inline-flex flex-nowrap gap-4 items-center">
                    <button type="button" className="cs-b-round"><AiOutlineSearch /></button>
                    <button type="button" className="cs-b-round"><TbHelpHexagon /></button>
                </div>
                <div className="inline-flex justify-end items-center min-w-[90px] ml-3">
                    <HeaderAvatar>
                        <button className="cs-bg-3 hover:cs-bg-4 transition-all text-white px-5 py-2 rounded" onClick={signinLink}>Sign in</button>
                    </HeaderAvatar>
                </div>
            </div>
        </header>
    )
}

export default Header;