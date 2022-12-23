import styles from "./Dialog.module.scss"
import {useParams} from "react-router-dom";
import MessageInput from "./MessageInput/MessageInput";
import MessageList from "./MessageList/MessageList";
import {connect} from "react-redux";

const Dialog = () => {
    const {dialog_id} = useParams()

    return (
        <div className={styles.current_dialog}>
            <MessageList dialog_id={dialog_id}/>
            {dialog_id && <MessageInput dialog_id={dialog_id}/>}
        </div>
    )
}

const mapStateToProps = () => ({
})

export default connect(mapStateToProps)(Dialog)