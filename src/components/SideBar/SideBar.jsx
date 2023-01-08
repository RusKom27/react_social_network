import React from "react"

import styles from "./SideBar.module.scss"

export const SideBar = ({children}) => {
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}