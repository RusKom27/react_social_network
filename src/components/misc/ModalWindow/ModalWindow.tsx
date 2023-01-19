import React, {FC, MouseEventHandler, ReactElement} from "react";
import styles from "./ModalWindow.module.scss"

type PropsType = {
    children: ReactElement,
    closeWindow: () => void,
    title: string
}

export const ModalWindow: FC<PropsType> = ({children, closeWindow, title = ''}) => {

    const onClickHandler: MouseEventHandler = (event) => {
        if ((event.target as HTMLDivElement).classList[0] === styles.container) closeWindow()
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