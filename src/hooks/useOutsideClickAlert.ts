import React, {useEffect, useRef, useState} from "react";

export const useOutsideClickAlert = (initialIsVisible = false) => {
    // const handleClickOutside = (event: MouseEvent) => {
    //     if (ref.current) console.log(ref.current &&
    //         !ref.current.contains(event.target as Node), ref.current, event.target)
    //     if (ref.current &&
    //         !ref.current.contains(event.target as Node)) {
    //         callback()
    //     }
    // }
    //
    // useEffect(() => {
    //
    //     document.addEventListener("click", handleClickOutside);
    //     return () => {
    //         document.removeEventListener("click", handleClickOutside);
    //     };
    // }, [ref]);
    //
    // return ref







    const [isComponentVisible, setIsComponentVisible] = useState(initialIsVisible);
    const ref = useRef<HTMLDivElement>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
            setIsComponentVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);

    return { ref, isComponentVisible, setIsComponentVisible };
}