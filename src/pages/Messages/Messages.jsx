import styles from "./Messages.module.scss"
import {Dialog} from "./Dialog/Dialog";
import {DialogList} from "./DialogList/DialogList";
import {Route, Routes} from "react-router-dom";

function Messages(props) {
    return (
        <div className={styles.container}>
            <DialogList dialogs={props.dialogs}/>
            <Dialog messages={props.dialogs.messages}/>
        </div>
    )
}

export {Messages}