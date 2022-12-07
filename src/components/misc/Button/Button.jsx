import React from "react"
import styles from "./Button.module.scss"

function Button({children, onClick, style}) {
    return (
        <div onClick={onClick} className={styles.button + ' ' + style}>
            {children}
        </div>
    )
}

export {Button}