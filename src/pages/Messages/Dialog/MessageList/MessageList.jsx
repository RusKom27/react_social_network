import styles from "./MessageList.module.scss"
import {createRef, useEffect} from "react";
import {Message} from "../../../../components/Message/Message";
import {connect} from "react-redux";

function MessageList({messages, dialog_id}) {
    const message_list = createRef()
    useEffect(() => {
        message_list.current.scrollTop = message_list.current.scrollHeight
    })
    messages = messages.map(message => <Message
            key={message.id}
            username={message.username}
            text={message.text}
        />
    )

    return (
        <div ref={message_list} className={styles.message_list}>
            {messages}
        </div>
    )
}

const mapStateToProps = (state, {dialog_id}) => ({
    messages: state.messages ? state.messages.dialogs.find(dialog => dialog.id.toString() === dialog_id).messages : []
})

export default connect(mapStateToProps)(MessageList)