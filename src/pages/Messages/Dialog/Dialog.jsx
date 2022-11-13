import styles from "./Dialog.module.scss"
import {Message} from "./Message/Message";
import {MessageInput} from "./MessageInput/MessageInput";
import {useParams} from "react-router-dom";
import {createRef, useEffect} from "react";

function Dialog(props) {
    const {id} = useParams()
    const message_list = createRef()
    useEffect(() => {
        message_list.current.scrollTop = message_list.current.scrollHeight
    })

    let messages = ""
    if (props.dialogs) {
        const messages_list = props.dialogs.find(dialog => {
            return "" + dialog.id === id
        }).messages
        messages = messages_list.map(message => <Message key={message.id} username={message.username}
                                                         text={message.text}/>)
    }

    return (
        <div className={styles.current_dialog}>
            <div ref={message_list} className={styles.message_list}>
                {messages}
            </div>
            {props.addMessage !== null ? <MessageInput addMessage={props.addMessage} id={id}/> : null}
        </div>
    )
}

export {Dialog}