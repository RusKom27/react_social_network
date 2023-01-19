import React, {FC} from "react";

import {useAppSelector} from "../../../../hooks/redux";
import {Message, Loader} from "../../../../components";

import styles from "./MessageList.module.scss"
import {IMessage} from "../../../../models";

type PropsType = {
    dialog_id: string | undefined
}

export const MessageList: FC<PropsType> = ({dialog_id}) => {
    const messages = useAppSelector(
        state => state.messages.dialogs?.find(dialog => dialog?._id === dialog_id)?.messages
    )

    if (!messages) return <Loader/>

    const messageComponents = messages.map((message: IMessage) => <Message
            key={message._id}
            message={message}
        />
    )
    return (
        <div className={styles.container}>
            <div className={styles.message_list}>
                {messageComponents}
            </div>
        </div>
    )
}