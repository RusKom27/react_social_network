import React from "react"
import styles from "./DialogList.module.scss"
import {DialogListItem} from "./DialogListItem/DialogListItem";

function DialogList({dialogs, toggleMenuTab}) {

    const dialogsList = dialogs.map(
        dialog => <DialogListItem
            key={dialog.id}
            id={dialog.id}
            member={dialog.member}
            message={dialog.messages.at(-1)}
            toggleMenuTab={toggleMenuTab}
        />
    )

    return (
        <div className={styles.dialogs_list}>
            {dialogsList}
        </div>
    )
}

export {DialogList}