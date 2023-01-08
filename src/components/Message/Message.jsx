import React, {memo, useEffect, useMemo, useRef} from "react"
import {useDispatch, useSelector} from "react-redux";

import {ReactComponent as Checked} from "../../static/images/svg/check2-all.svg";
import {ReactComponent as Unchecked} from "../../static/images/svg/check2.svg";
import {checkMessage} from "../../redux/thunk";
import {useOnScreen, useImage} from "../../hooks";

import styles from "./Message.module.scss"

export const Message = memo(({message}) => {
    const token = useSelector(state => state.auth.token)
    const dispatch = useDispatch()
    const owner_class = message.sender._id === token ? styles.from_user : styles.from_other
    const ref = useRef()
    const isVisible = useOnScreen(ref)
    const image = useImage(message.sender.images.avatar_image.small)


    useEffect(() => {
        if(isVisible && !message.checked && message.sender._id !== token) {
            dispatch(checkMessage(message._id))
        }
    }, [isVisible, message, token])

    const date_string = useMemo(() => {
        const date = new Date(message.creation_date)
        return `
        ${date.getFullYear() !== new Date().getFullYear() ? date.getFullYear() : ''}
        ${date.getDay() !== new Date().getDay() ? `${date.getDate()}.${date.getMonth()}` : ''}
        ${date.getHours()}:${date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()}
        `
    }, [message])

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