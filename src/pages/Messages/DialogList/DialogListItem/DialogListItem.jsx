import React from "react"
import {NavLink} from "react-router-dom";

import styles from "./DialogListItem.module.scss"

function DialogListItem({id, message, member, toggleMenuTab}) {
    const activeClassName = ({isActive}) => isActive ? styles.active : undefined
    return (
        <NavLink className={activeClassName} to={`${id}`}>
            <div onClick={() => toggleMenuTab(true)} className={styles.item}>
                <div className={styles.member}>
                    {member.name}
                </div>
                <div className={styles.username}>
                    {message && message.sender.name}
                </div>
                <div className={styles.message_text}>
                    {message && message.text}
                </div>
            </div>
        </NavLink>
    )
}

export {DialogListItem}