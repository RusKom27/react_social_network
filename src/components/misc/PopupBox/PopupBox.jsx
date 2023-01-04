import styles from "./PopupBox.module.scss"

export const PopupBox = ({children, type, closeBox}) => {
    return (
        <div onClick={closeBox} className={`${styles.container} ${styles[type.toLowerCase()]}`}>
            {children}
        </div>
    )
}