import styles from "./ModalWindow.module.scss"

export const ModalWindow = ({children, closeWindow}) => {

    const onClickHandler = (event) => {
        if (event.target.classList[0] === styles.container) closeWindow()
    }

    return (
        <div onClick={onClickHandler} className={styles.container}>
            <div>
                {children}
            </div>
        </div>
    )
}