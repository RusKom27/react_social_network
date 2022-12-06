import React from "react"
import styles from "./Message.module.scss"
import image_placeholder from "../../images/image-placeholder1.png";
import {useSelector} from "react-redux";

function Message({user, text}) {
    const token = useSelector(state => state.auth.token)
    const owner_class = user._id === token ? styles.from_user : styles.from_other

    return (
        <div className={owner_class + " " + styles.message}>
            <div>{user.name}</div>
            <div>{/*<img src={image_placeholder} alt=""/>*/}</div>
            <div>{text}</div>
        </div>
    )
}

export {Message}