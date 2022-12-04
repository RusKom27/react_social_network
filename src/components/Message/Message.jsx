import React from "react"
import styles from "./Message.module.scss"
import image_placeholder from "../../images/image-placeholder1.png";

function Message({username, text}) {
    const owner_class = username === "User1" ? styles.from_user : styles.from_other

    return (
        <div className={owner_class + " " + styles.message}>
            {username}
            <img src={image_placeholder} alt=""/>
            {text}
        </div>
    )
}

export {Message}