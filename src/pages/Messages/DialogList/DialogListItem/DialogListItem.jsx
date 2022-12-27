import React from "react"
import {NavLink} from "react-router-dom";

import styles from "./DialogListItem.module.scss"

function DialogListItem({id, last_message, member_names, toggleMenuTab, unchecked_messages_count}) {
    const activeClassName = ({isActive}) => isActive ? styles.active : undefined
    return (
        <NavLink className={activeClassName} to={`${id}`}>
            <div onClick={() => toggleMenuTab(true)} className={styles.container}>
                <div className={styles.dialog_info}>
                    <div className={styles.member}>
                        {member_names}
                    </div>
                    <div className={styles.username}>
                        {last_message && last_message.sender.name}
                    </div>
                    <div className={styles.message_text}>
                        {last_message && last_message.text}
                    </div>
                </div>
                {unchecked_messages_count > 0 &&
                    <div className={styles.unchecked_messages_count}>
                        {unchecked_messages_count}
                    </div>
                }

            </div>
        </NavLink>
    )
}

export {DialogListItem}