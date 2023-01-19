import React, {FC, ReactElement} from "react"

import styles from "./SideBar.module.scss"

type PropsType = {
    children: ReactElement
}

export const SideBar: FC<PropsType> = ({children}) => {
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}