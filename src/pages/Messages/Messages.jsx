import React from "react"
import styles from "./Messages.module.scss"
import {Outlet} from "react-router-dom";
import {DialogListContainer} from "./DialogList/DialogListContainer";

function Messages() {
    return (
        <div className={styles.container}>
            <DialogListContainer/>
            <Outlet />
        </div>
    )
}

export {Messages}