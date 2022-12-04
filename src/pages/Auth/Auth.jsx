import React from "react"
import styles from "./Auth.module.scss"
import {Outlet} from "react-router-dom";

export const Auth = () => {
    return (
        <div className={styles.container}>
            <Outlet/>
        </div>
    )
}