import React, {FC} from "react";

import {MessageCreationForm} from "../../../../forms";

import styles from "./MessageInput.module.scss"

type PropsType = {
    dialog_id: string
}

export const MessageInput: FC<PropsType> = ({dialog_id}) => {
    return (
        <div className={styles.input_section}>
            <MessageCreationForm dialog_id={dialog_id}/>
        </div>
    )
}