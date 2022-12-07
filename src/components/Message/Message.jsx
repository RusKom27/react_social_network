import React from "react"
import styles from "./Message.module.scss"
import {useSelector} from "react-redux";

function Message({user, text}) {
    const token = useSelector(state => state.auth.token)
    const owner_class = user._id === token ? styles.from_user : styles.from_other

    return (
        <div className={owner_class + " " + styles.message}>
            <div>
                <div>{user.name}</div>
                <div>{text}</div>
            </div>
        </div>
    )
}

export {Message}