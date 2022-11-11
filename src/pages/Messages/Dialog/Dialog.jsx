import styles from "./Dialog.module.scss"
import {Message} from "./Message/Message";

function Dialog() {
    return (
        <div className={styles.current_dialog}>
            <Message/>
            <Message/>
            <Message/>
        </div>
    )
}

export {Dialog}