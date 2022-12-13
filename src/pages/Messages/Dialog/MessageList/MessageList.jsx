import styles from "./MessageList.module.scss"
import {connect, useSelector} from "react-redux";
import {Message} from "../../../../components";
import {Loader} from "../../../../components/misc/Loader/Loader";

function MessageList() {
    const messages = useSelector(state => {
        return state.messages.messages
    })

    if (!messages) return <Loader/>

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