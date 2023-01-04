import styles from "./ModalWindow.module.scss"

export const ModalWindow = ({children, closeWindow, title = ''}) => {

    const onClickHandler = (event) => {
        if (event.target.classList[0] === styles.container) closeWindow()
    }

    return (
        <div onClick={onClickHandler} className={styles.container}>

            <div>
                <span>{title}</span>
                {children}
            </div>
        </div>
    )
}