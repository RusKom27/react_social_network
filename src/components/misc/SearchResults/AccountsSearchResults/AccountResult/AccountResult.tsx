import React, {FC, useEffect, useRef} from "react";
import {gsap} from "gsap";
import {Link} from "react-router-dom";

import {IUser} from "../../../../../models";
import {Image} from "../../../Image/Image";

import styles from "./AccountResult.module.scss"

type PropsType = {
    account: IUser,
}

export const AccountResult: FC<PropsType> = ({account}) => {
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
                    <Image image_name={account.images.avatar_image.small}/>
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