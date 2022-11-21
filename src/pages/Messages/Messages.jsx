import React from "react"
import styles from "./Messages.module.scss"
import {DialogList} from "./DialogList/DialogList";
import {Outlet} from "react-router-dom";

function Messages(props) {
    return (
        <div className={styles.container}>
            <DialogList messages={props.messages}/>
            <Outlet />
            {/*<Dialog messages={props.dialogs.messages}/>*/}
        </div>
    )
}

export {Messages}