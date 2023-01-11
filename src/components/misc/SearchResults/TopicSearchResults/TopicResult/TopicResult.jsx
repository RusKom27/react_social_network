import {useEffect, useRef} from "react";
import {gsap} from "gsap";
import {Link} from "react-router-dom";

import styles from "./TopicResult.module.scss"

export const TopicResult = ({topic}) => {
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