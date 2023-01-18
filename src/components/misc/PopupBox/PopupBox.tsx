import React, {FC, ReactElement} from "react"
import styles from "./PopupBox.module.scss"

type PropsType = {
    children: ReactElement
    type: string
    closeBox: () => void
}

export const PopupBox: FC<PropsType> = ({children, type, closeBox}) => {
    return (
        <div onClick={closeBox} className={`${styles.container} ${styles[type.toLowerCase()]}`}>
            {children}
        </div>
    )
}