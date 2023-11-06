import { useRef, useState } from 'react'
import { AiOutlineClose, AiOutlineSearch } from 'react-icons/ai';
// import { SearchQueries } from './searchQueries';


function HeaderSearch() {
    const [query, setQuery] = useState("");
    const [, setFocus] = useState(false);

    const inputRef = useRef<HTMLInputElement>(null);

    // const [results, setResults] = useState<SearchQueries[]>([]);

    // useEffect(() => {
    //     setResults(filterAndSort(searchQueries, query, "name"));
    // }, [query]);

    return (
        <div className="w-full max-w-xl h-12 relative">
            <div className="absolute w-full flex flex-col items-stretch inset-0 cs-bg-3a rounded-full [&:has(>input:focus)]:cs-bg-3b transition-all">
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
                <label htmlFor="search-query" className="top-1/2 absolute left-1 text-lg -translate-y-1/2 cs-b-round"><AiOutlineSearch /></label>
                {query && <button type="button" className="top-1/2 absolute right-1 cs-b-round text-lg -translate-y-1/2" onClick={() => {
                    setQuery("");
                    inputRef.current?.focus();

                }}><AiOutlineClose /></button>}
                {/* {true && <div className="pt-10 absolute top-20 left-0 right-0 z-20">
                    <AnimatePresence initial={false}>
                        {searchQueries.filter((item) => item.name.toLowerCase().includes(query.trim().toLowerCase())).map(res => <AnimatedListItem key={res.name}>
                            <Link to={res.link || ""}>{res.name}</Link>
                        </AnimatedListItem>)}
                    </AnimatePresence>
                </div>} */}
            </div>
        </div>
    )
}

export default HeaderSearch;

