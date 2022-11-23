import React from "react"
import styles from "./DialogList.module.scss"
import {DialogListItem} from "./DialogListItem/DialogListItem";

function DialogList({messages}) {

    const dialogsList = messages.dialogs.map(
        (dialog, i) => <DialogListItem
            key={i}
            id={dialog.id}
            member={dialog.member}
            message={dialog.messages.at(-1)}
        />
    )

    return (
        <div className={styles.dialogs_list}>
            {dialogsList}
        </div>
    )
}

export {DialogList}