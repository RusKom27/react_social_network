import React, {memo} from "react"

import {ReactComponent as Checked} from "../../static/images/svg/check2-all.svg";
import {ReactComponent as Unchecked} from "../../static/images/svg/check2.svg";
import {useDate} from "../../hooks";
import {IMessage} from "../../models";
import {useAppSelector} from "../../hooks/redux";
import {userApi} from "../../services";
import {Image} from "../misc/Image/Image";
import {UserCheckMessageObserver} from "./UserCheckMessageObserver/UserCheckMessageObserver";

import styles from "./Message.module.scss"

type PropsType = {
    message: IMessage,
}

export const Message = memo<PropsType>(({message}) => {
    const token = useAppSelector(state => state.auth.token)
    const {data: sender, isLoading} = userApi.useFetchUserByIdQuery(message.sender_id)

    const date_string = useDate(message.creation_date)

    if (isLoading || !sender) return <div className={styles.container}></div>

    const owner_class = sender._id === token ? styles.from_user : styles.from_other

    return (
        <div className={`${[styles.container, owner_class, !message.checked && styles.unchecked].join(' ')}`}>
            <div className={styles.user_avatar}>
                <Image image_name={sender.images.avatar_image.small}/>
            </div>
            <div className={styles.message}>
                <div className={styles.user_name}>{sender.name}</div>
                <div className={styles.message_data}>
                    <div className={styles.message_text}>{message.text}</div>
                    <div className={styles.message_description}>
                        <div className={styles.message_time}>{date_string}
                        </div>
                        <div className={styles.view_status}>
                            {message.checked ? <Checked/> : <Unchecked/>}
                        </div>
                    </div>
                </div>
            </div>
            <UserCheckMessageObserver message={message}/>
        </div>
    )
})