import React, {FC} from "react"
import styles from "./Button.module.scss"

type propsType = {
    children: React.ReactNode
    onClick?: React.MouseEventHandler
    style?: string
    type?: "button" | "submit" | "reset" | undefined
}

const Button: FC<propsType> = ({children, onClick, style, type}) => {
    return (
        <button type={type} onClick={onClick || (() => {})} className={styles.button + ' ' + style}>
            {children}
        </button>
    )
}

export {Button}