import styles from "./MessageList.module.scss"
import {createRef, useEffect} from "react";
import {Message} from "../../../../components/Message/Message";
import {connect, useSelector} from "react-redux";

function MessageList() {
    const message_list = createRef()
    const messages = useSelector(state => {
        return state.messages.messages
    })

    useEffect(() => {
        message_list.current.scrollTop = message_list.current.scrollHeight
    })
    const messageComponets = messages.map(message => <Message
            key={message._id}
            user={message.sender}
            text={message.text}
        />
    )

    return (
        <div ref={message_list} className={styles.message_list}>
            {messageComponets}
        </div>
    )
}

const mapStateToProps = () => ({})

export default connect(mapStateToProps)(MessageList)