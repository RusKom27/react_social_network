import {MessageCreationForm} from "../../../../forms";

import styles from "./MessageInput.module.scss"

export const MessageInput = ({dialog_id}) => {
    return (
        <div className={styles.input_section}>
            <MessageCreationForm dialog_id={dialog_id}/>
        </div>
    )
}