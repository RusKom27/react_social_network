import React from "react"
import {useSelector} from "react-redux";

import {Loader} from "../../../components";
import {DialogListItem} from "./DialogListItem/DialogListItem";

import styles from "./DialogList.module.scss"

export const DialogList = () => {
    const current_user = useSelector(state => state.auth.current_user)
    const dialogs = useSelector(state => state.messages.dialogs)

    if (!dialogs) return <Loader/>

    const dialogsList = dialogs.map(dialog => {
        const unchecked_messages_count = dialog.messages
            .reduce((acc, message) => (!message.checked && message.sender._id !== current_user._id) ? acc + 1 : acc, 0)
        const member_names = dialog.members
            .filter(member => member.login !== current_user.login).map(member => member.name).join(',')

        return <DialogListItem
                key={dialog._id}
                id={dialog._id}
                member_names={member_names}
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