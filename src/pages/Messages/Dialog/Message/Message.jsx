import React from "react"
import styles from "./Message.module.scss"
import image_placeholder from "../../../../images/image-placeholder1.png";

function Message(props) {
    const owner_class = props.username === "User1" ? styles.from_user : styles.from_other

    return (
        <div className={owner_class + " " + styles.message}>
            {props.username}
            <img src={image_placeholder} alt=""/>
            {props.text}
        </div>
    )
}

export {Message}