import React, {memo, useEffect, useMemo} from "react"
import {useDispatch, useSelector} from "react-redux";

import {ReactComponent as Checked} from "../../static/images/svg/check2-all.svg";
import {ReactComponent as Unchecked} from "../../static/images/svg/check2.svg";
import {checkMessage} from "../../redux/thunk";
import {useOnScreen, useImage} from "../../hooks";

import styles from "./Message.module.scss"
import {useDate} from "../../hooks/useDate";

export const Message = memo(({message}) => {
    const token = useSelector(state => state.auth.token)
    const dispatch = useDispatch()
    const owner_class = message.sender._id === token ? styles.from_user : styles.from_other
    const [isVisible, ref] = useOnScreen()
    const image = useImage(message.sender.images.avatar_image.small)

    useEffect(() => {
        if(isVisible && !message.checked && message.sender._id !== token) {
            dispatch(checkMessage(message._id))
        }
    }, [isVisible, message, token])

    const date_string = useDate(message.creation_date)

    return (
        <div ref={ref} className={`${styles.container} ${owner_class} ${!message.checked && styles.unchecked}`}>
            <div className={styles.user_avatar}>
                {image.src && <img src={image.src} alt=""/>}
            </div>
            <div className={styles.message}>
                <div className={styles.user_name}>{message.sender.name}</div>
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
        </div>
    )
})