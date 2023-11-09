import { Search, X } from 'lucide-react';
import { useRef, useState } from 'react';
import searchQueries from './searchQueries';
import { Link, To } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import classNames from 'classnames';


function HeaderSearch() {
    const [query, setQuery] = useState("");
    const [focus, setFocus] = useState(false);

    const results = searchQueries.filter((item) => query.trim() && item.name.toLowerCase().includes(query.trim().toLowerCase()));

    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <div className="w-full max-w-2xl h-12 relative hidden md:block">
            <div className={twMerge(classNames(
                "absolute w-full z-30 flex-col items-stretch inset-0 bg-[#18182E] rounded-xl [&:has(>input:focus)]:cs-bg-3b transition-all duration-75 bottom-auto overflow-hidden",
                ((focus || query.trim()) && "shadow-[0_0_0_2px_#fff3]"),
            ))}>
                <div className="flex flex-nowrap h-12 relative">
                    <input
                        type="search"
                        name="q"
                        id="search-query"
                        ref={inputRef}
                        className="w-full h-full rounded-t-lg outline-none px-14 bg-transparent relative"
                        placeholder="Search for anything..."
                        autoComplete="off"
                        value={query}
                        onChange={({ target }) => setQuery(target.value)}
                        onFocus={() => setFocus(true)}
                        onBlur={() => setFocus(false)}
                    />
                    <label htmlFor="search-query" className="top-1/2 absolute left-1 text-lg -translate-y-1/2 cs-b-round"><Search /></label>
                    {query && <button type="button" className="top-1/2 absolute right-1 cs-b-round text-lg -translate-y-1/2" onClick={() => {
                        setQuery("");
                        inputRef.current?.focus();

                    }}><X size={20} absoluteStrokeWidth /></button>}
                </div>
                {(focus || query.trim()) && <div className="max-h-[70dvh] overflow-auto">
                    {query.trim() && (results.length ? results.map(res => <SearchResult
                        key={res.name}
                        to={res.link}
                        name={res.name}
                        icon={res.icon}
                        onClick={(e) => {
                            if (res.onClick && typeof res.onClick === "function") {
                                if (!res.onClick(e)) return;
                            }
                            setQuery("");
                        }}
                    />) : <div className="px-5 border-t border-t-[#fff3] py-2 text-sm text-gray-400">No matching results found.</div>)}
                </div>}
            </div>
        </div>
    )
}

export default HeaderSearch;

interface SearchResultProps {
    to: To;
    name: React.ReactNode;
    icon: React.ReactNode;
    onClick: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

function SearchResult({ to, icon, name, onClick }: SearchResultProps) {
    return (
        <Link className="w-full px-5 gap-5 flex items-center py-3 border-t border-t-[#fff3] hover:no-underline hover:bg-[#fff1] transition-all" to={to} onClick={onClick}>
            <span className="">{icon}</span>
            <span className="">{name}</span>
        </Link>
    );
}

