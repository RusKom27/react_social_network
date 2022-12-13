import styles from "./Dialog.module.scss"
import {useParams} from "react-router-dom";
import MessageInput from "./MessageInput/MessageInput";
import MessageList from "./MessageList/MessageList";
import {connect} from "react-redux";
import {getMessages} from "../../../redux/thunk";
import {useEffect} from "react";

const Dialog = ({getMessages}) => {
    const {dialog_id} = useParams()
    let isUpdateMessages = true

    const updateMessages = () => {
        if (isUpdateMessages) {
            getMessages(dialog_id)
            setTimeout(updateMessages, 1000)
        }
    }

    useEffect(() => {
        updateMessages()
        return () => {isUpdateMessages = false}
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

export default connect(mapStateToProps, {getMessages})(Dialog)