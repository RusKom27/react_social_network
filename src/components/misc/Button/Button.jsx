import React from "react"
import styles from "./Button.module.scss"

function Button({children, onClick, style, type}) {
    return (
        <button type={type} onClick={onClick} className={styles.button + ' ' + style}>
            {children}
        </button>
    )
}

export {Button}