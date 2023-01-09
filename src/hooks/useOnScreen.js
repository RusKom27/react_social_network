import {useEffect, useRef, useState} from "react";

export const useOnScreen = () => {

    const [isIntersecting, setIntersecting] = useState(false)
    const ref = useRef()
    const observer = new IntersectionObserver(
        ([entry]) => {
            setIntersecting(entry.isIntersecting)
        }
    )

    useEffect(() => {
        observer.observe(ref.current)
        return () => { observer.disconnect() }
    }, [isIntersecting])

    return [isIntersecting, ref]
}