import React from "react"
import styles from "./DialogList.module.scss"
import {DialogListItem} from "./DialogListItem/DialogListItem";

function DialogList(props) {

    const dialogs = props.dialogs.messages.map(
        (dialog, i) => <DialogListItem
            key={i}
            id={dialog.id}
            message={dialog.messages.at(-1)}
        />
    )

    return (
        <div className={styles.dialogs_list}>
            {dialogs}
        </div>
    )
}

export {DialogList}