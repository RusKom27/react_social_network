import styles from "./DialogListItem.module.scss"
import image_placeholder from "../../../../images/image-placeholder1.png";

function DialogListItem() {
    return (
        <div className={styles.item}>
            <div className={styles.username}>
                User Name
            </div>
            <div className={styles.message_text}>
                message
            </div>
        </div>
    )
}

export {DialogListItem}