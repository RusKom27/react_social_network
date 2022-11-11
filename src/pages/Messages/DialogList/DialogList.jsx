import styles from "./DialogList.module.scss"
import {DialogListItem} from "./DialogListItem/DialogListItem";

function DialogList() {
    return (
        <div className={styles.dialogs_list}>
            <DialogListItem/>
            <DialogListItem/>
            <DialogListItem/>
        </div>
    )
}

export {DialogList}