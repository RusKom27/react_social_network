import styles from "./MessageInput.module.scss"

function MessageInput() {
    return (
        <div className={styles.input_block}>
            <input type="text"/>
            <input type="submit" value={"Send"}/>
        </div>

    )
}

export {MessageInput}