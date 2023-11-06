import { useEffect } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { setCurrentAuthIndex } from "devflikrauth";
import { useAuthCurrentUser } from 'react-devflikrauth-hooks';

export interface InitializeProps {
    index?: number;
}

function Initialize({ index }: InitializeProps) {
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();
    const params = useParams();
    const [user] = useAuthCurrentUser();

    useEffect(() => {
        if (index !== undefined && !Number.isNaN(index)) {
            console.log(setCurrentAuthIndex(index));
        }
    }, [index]);

    useEffect(() => {
        let base: HTMLBaseElement | null = document.head.querySelector("base");
        if (!base) {
            base = document.createElement("base");
            document.head.appendChild(base);
        }
        base.href = user ? `/u/${user.index}` : "/";
    }, [user]);

    useEffect(() => {
        if (params.authUser) {
            const auth = parseInt(params.authUser || "-1");
            if (!Number.isNaN(auth) && auth !== -1) {
                setCurrentAuthIndex(auth);
            }
        }
    }, [params]);

    useEffect(() => {
        if (searchParams.has("auth")) {
            const auth = parseInt(searchParams.get("auth") || "-1");
            searchParams.delete("auth");
            setSearchParams(searchParams);

            if (!Number.isNaN(auth) && auth !== -1) {
                navigate(`/u/${auth}`);
            }
        }


    }, [navigate, searchParams, setSearchParams]);

    return null;
}

export default Initialize;