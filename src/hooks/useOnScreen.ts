import React, {useEffect, useRef, useState} from "react";

export const useOnScreen = () => {

    const [isVisible, setVisible] = useState(false)
    const ref = useRef<HTMLDivElement>(null);
    const observer = new IntersectionObserver(
        ([entry]) => {
            setVisible(entry.isIntersecting)
        }
    )

    useEffect(() => {
        observer.observe(<Element>ref.current)
        return () => { observer.disconnect() }
    }, [isVisible])

    return {isVisible, ref}
}