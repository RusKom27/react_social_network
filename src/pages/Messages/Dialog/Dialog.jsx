import styles from "./Dialog.module.scss"
import {useParams} from "react-router-dom";
import MessageInput from "./MessageInput/MessageInput";
import MessageList from "./MessageList/MessageList";
import {connect} from "react-redux";
import {getMessages} from "../../../packages/api/rest/message";
import {setMessages} from "../../../redux/actions";

const Dialog = ({setMessages}) => {
    const {dialog_id} = useParams()

    getMessages(dialog_id).then(messages => {
        setMessages(messages.data)
    })

    return (
        <div className={styles.current_dialog}>
            <MessageList dialog_id={dialog_id}/>
            {dialog_id && <MessageInput dialog_id={dialog_id}/>}
        </div>
    )
}

const mapStateToProps = (state) => ({
})

export default connect(mapStateToProps, {setMessages})(Dialog)