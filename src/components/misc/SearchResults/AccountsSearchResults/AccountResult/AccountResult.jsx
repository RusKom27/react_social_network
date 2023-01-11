import {useEffect, useRef} from "react";
import {gsap} from "gsap";
import {Link} from "react-router-dom";

import {useImage} from "../../../../../hooks";

import styles from "./AccountResult.module.scss"

export const AccountResult = ({account}) => {
    const image = useImage(account.images.avatar_image.small)
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
            <Link to={`../../profile/${account.login}`}>
                <div>
                    {image.src && <img src={image.src} alt=""/>}
                </div>
                <div>
                    <div>
                        <span className={styles.username}>{account.name}</span>
                        <span className={styles.user_login}>@{account.login}</span>
                    </div>
                    <div>
                        <span className={styles.subscribers_count}>subscribers: {account.subscribers.length}</span>
                    </div>
                </div>


            </Link>
        </div>

    )
}