import React from "react"
import styles from "./DialogListItem.module.scss"
import {NavLink} from "react-router-dom";

function DialogListItem({id, message, member, toggleMenuTab}) {
    const activeClassName = ({isActive}) => isActive ? styles.active : undefined

    return (
        <NavLink className={activeClassName} to={`${id}`}>
            <div onClick={() => toggleMenuTab(true)} className={styles.item}>
                <div className={styles.member}>
                    {member}
                </div>
                <div className={styles.username}>
                    {message.username}
                </div>
                <div className={styles.message_text}>
                    {message.text}
                </div>
            </div>
        </NavLink>

    )
}

export {DialogListItem}