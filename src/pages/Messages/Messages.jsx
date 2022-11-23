import React from "react"
import styles from "./Messages.module.scss"
import {DialogList} from "./DialogList/DialogList";
import {Outlet} from "react-router-dom";

function Messages({store}) {
    const state = store.getState()
    return (
        <div className={styles.container}>
            <DialogList messages={state.messages}/>
            <Outlet />
        </div>
    )
}

export {Messages}