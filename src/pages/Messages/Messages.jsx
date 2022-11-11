import styles from "./Messages.module.scss"
import {Dialog} from "./Dialog/Dialog";
import {DialogList} from "./DialogList/DialogList";

function Messages() {
    return (
        <div className={styles.container}>
            <DialogList/>
            <Dialog/>
        </div>
    )
}

export {Messages}