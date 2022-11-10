import styles from "./Messages.module.scss"

function Messages() {
    return (
        <div className={styles.container}>
            <div className={styles.dialogs_list}>
                <div>
                    <div>
                        User Name
                    </div>
                    <div>
                        message
                    </div>
                </div>
                <div>
                    <div>
                        User Name
                    </div>
                    <div>
                        message
                    </div>
                </div>
            </div>
            <div className={styles.current_dialog}>
                <div>
                    Message
                </div>
                <div>
                    Message
                </div>
                <div>
                    Message
                </div>
            </div>
        </div>
    )
}

export {Messages}