import React from "react"
import styles from "./DialogListItem.module.scss"
import {NavLink} from "react-router-dom";

function DialogListItem(props) {
    const activeClassName = ({isActive}) => isActive ? styles.active : undefined

    return (
        <NavLink className={activeClassName} to={`${props.id}`}>

            <div className={styles.item}>
                <div className={styles.member}>
                    {props.member}
                </div>
                <div className={styles.username}>
                    {props.message.username}
                </div>
                <div className={styles.message_text}>
                    {props.message.text}
                </div>
            </div>
        </NavLink>

    )
}

export {DialogListItem}