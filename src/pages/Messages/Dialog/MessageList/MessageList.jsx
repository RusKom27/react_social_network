import styles from "./MessageList.module.scss"
import {connect, useSelector} from "react-redux";
import {Message, Loader} from "../../../../components";

function MessageList({dialog_id}) {
    const messages = useSelector(state => {
        return state.messages.dialogs?.find(dialog => dialog?._id === dialog_id)?.messages
    })

    if (!messages) return <Loader/>

    const messageComponets = messages.map(message => <Message
            key={message._id}
            message={message}
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