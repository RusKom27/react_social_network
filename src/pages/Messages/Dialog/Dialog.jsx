import styles from "./Dialog.module.scss"
import {useParams} from "react-router-dom";
import {ContainerMessageInput} from "./MessageInput/ContainerMessageInput";
import {ContainerMessageList} from "./MessageList/ContainerMessageList";

function Dialog({store}) {
    const {dialog_id} = useParams()
    return (
        <div className={styles.current_dialog}>
            <ContainerMessageList store={store} dialog_id={dialog_id}/>
            {dialog_id ? <ContainerMessageInput store={store} dialog_id={dialog_id}/> : ""}
        </div>
    )
}

export {Dialog}