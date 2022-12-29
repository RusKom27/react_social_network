import React, {useEffect, useMemo, useRef} from "react"
import {connect, useSelector} from "react-redux";

import {ReactComponent as Checked} from "../../images/check2-all.svg";
import {ReactComponent as Unchecked} from "../../images/check2.svg";
import {checkMessage} from "../../redux/thunk";
import {useOnScreen} from "../../hooks";
import Image from "../misc/Image/Image";

import styles from "./Message.module.scss"

const Message = ({message, checkMessage}) => {
    const token = useSelector(state => state.auth.token)
    const owner_class = message.sender._id === token ? styles.from_user : styles.from_other
    const ref = useRef()
    const isVisible = useOnScreen(ref)
    useEffect(() => {
        if(isVisible && !message.checked && message.sender._id !== token) {
            checkMessage(message._id)
        }
    }, [checkMessage, isVisible, message, token])

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
                <Image image_name={message.sender.images.avatar_image.small}/>
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
}

const mapStateToProps = (state) => ({})

export default connect(mapStateToProps, {checkMessage})(Message)