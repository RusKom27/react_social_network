import React from "react"
import {useSelector} from "react-redux";

import {Loader} from "../../../components";
import {DialogListItem} from "./DialogListItem/DialogListItem";
import {useAppSelector} from "../../../hooks/redux";

import styles from "./DialogList.module.scss"
import {IMessage} from "../../../models";

export const DialogList = () => {
    const current_user = useAppSelector(state => state.auth.current_user)
    const dialogs = useAppSelector(state => state.messages.dialogs)

    if (!dialogs || !current_user) return <Loader/>

    const dialogsList = dialogs.map(dialog => {
        const unchecked_messages_count = dialog.messages
            .reduce((acc: number, message: IMessage) => (!message.checked && message.sender_id !== current_user._id) ? acc + 1 : acc, 0)

        return <DialogListItem
                key={dialog._id}
                id={dialog._id}
                members_id={dialog.members_id}
                last_message={dialog.messages.at(-1)}
                unchecked_messages_count={unchecked_messages_count}
        />
    })

    return (
        <div className={styles.dialogs_list}>
            {dialogsList}
        </div>
    )
}