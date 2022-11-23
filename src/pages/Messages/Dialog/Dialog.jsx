import styles from "./Dialog.module.scss"
import {useParams} from "react-router-dom";
import {MessageInputContainer} from "./MessageInput/MessageInputContainer";
import {MessageListContainer} from "./MessageList/MessageListContainer";

function Dialog({store}) {
    const {dialog_id} = useParams()
    return (
        <div className={styles.current_dialog}>
            <MessageListContainer store={store} dialog_id={dialog_id}/>
            {dialog_id ? <MessageInputContainer store={store} dialog_id={dialog_id}/> : ""}
        </div>
    )
}

export {Dialog}