import {useSelector} from "react-redux";

import {Message, Loader} from "../../../../components";

import styles from "./MessageList.module.scss"

export const MessageList = ({dialog_id}) => {
    const messages = useSelector(
        state => state.messages.dialogs?.find(dialog => dialog?._id === dialog_id)?.messages
    )

    if (!messages) return <Loader/>

    const messageComponents = messages.map(message => <Message
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