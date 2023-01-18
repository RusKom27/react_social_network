import React, {FC} from "react";
import {useEffect, useRef} from "react";
import {gsap} from "gsap";
import {Link} from "react-router-dom";

import styles from "./TopicResult.module.scss"

type PropsType = {
    topic: string
}

export const TopicResult: FC<PropsType> = ({topic}) => {
    const ref = useRef(null)

    useEffect(() => {
        gsap.to(
            ref.current,
            {
                opacity: 1,
                duration: 0.5,
                y: 0
            }
        )
    })

    return (
        <div ref={ref} className={styles.container}>

            <Link to={`/`}>
                {topic}
            </Link>
        </div>

    )
}