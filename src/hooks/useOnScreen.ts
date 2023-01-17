import React, {createRef, useEffect, useState} from "react";

export const useOnScreen = () => {

    const [isIntersecting, setIntersecting] = useState(false)
    const ref = createRef()
    const observer = new IntersectionObserver(
        ([entry]) => {
            setIntersecting(entry.isIntersecting)
        }
    )

    useEffect(() => {
        observer.observe(<Element>ref.current)
        return () => { observer.disconnect() }
    }, [isIntersecting])

    return [isIntersecting, ref]
}