import React, {memo} from "react"
import styles from "./Message.module.scss"
import {useSelector} from "react-redux";
import Image from "../misc/Image/Image";


const Message = memo(({user, text}) => {
    const token = useSelector(state => state.auth.token)
    const owner_class = user._id === token ? styles.from_user : styles.from_other

    return (
        <div className={`${styles.container} ${owner_class}`}>
            <div className={styles.user_avatar}>
                <Image image_name={user.images.avatar_image.small}/>
            </div>
            <div className={styles.message}>
                <div>
                    <div className={styles.user_name}>{user.name}</div>
                    <div>{text}</div>
                </div>
            </div>
        </div>

    )
})

export {Message}