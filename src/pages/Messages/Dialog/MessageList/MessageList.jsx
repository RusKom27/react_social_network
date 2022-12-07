import styles from "./MessageList.module.scss"
import {connect, useSelector} from "react-redux";
import {Message} from "../../../../components/Message/Message";

function MessageList() {
    const messages = useSelector(state => {
        return state.messages.messages
    })

    const messageComponets = messages.map(message => <Message
            key={message._id}
            user={message.sender}
            text={message.text}
        />
    )
    return (
        <div className={styles.container}>
            <div className={styles.message_list}>
                {messageComponets}
            </div>
        </div>
    )
}

const mapStateToProps = () => ({})

export default connect(mapStateToProps)(MessageList)