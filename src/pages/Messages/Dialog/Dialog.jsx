import styles from "./Dialog.module.scss"
import {Message} from "./Message/Message";
import {MessageInput} from "./MessageInput/MessageInput";
import {DialogListItem} from "../DialogList/DialogListItem/DialogListItem";

function Dialog(props) {
    return (
        <div className={styles.current_dialog}>
            <div className={styles.message_list}>
                <Message />
                <Message />
                <Message />
                <Message />
            </div>
            <MessageInput/>
        </div>

    )
}

export {Dialog}