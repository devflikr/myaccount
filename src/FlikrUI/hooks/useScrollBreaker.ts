import React, { useEffect, useRef, useState } from 'react'
import uuid from '../../core/utils/uuid';


function useScrollBreaker<T>(type: "hidden" | "scroll" | "auto" = "hidden", defaultValue: T): [state: T, setState: React.Dispatch<React.SetStateAction<T>>] {
    const uid = useRef(uuid());

    const [state, setState] = useState<T>(defaultValue);


    useEffect(() => {
        if (state) {
            document.documentElement.setAttribute(`data-${uid.current}`, document.documentElement.style.overflow);
            document.documentElement.style.overflow = type;
        } else {
            document.documentElement.style.overflow = document.documentElement.getAttribute(`data-${uid.current}`) || "";
            document.documentElement.removeAttribute(`data-${uid.current}`);
        }
    }, [state, type, uid]);

    return [state, setState];
}

export default useScrollBreaker;