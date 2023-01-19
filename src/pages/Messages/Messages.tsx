import React from "react";
import {Outlet, useParams} from "react-router-dom";

import {DialogList} from "./DialogList/DialogList";
import {useWindowDimensions} from "../../hooks";

import styles from "./Messages.module.scss"

export const Messages = () => {
    const {width} = useWindowDimensions()
    const {dialog_id} = useParams()

    return (
        <div className={styles.container}>
            {(width > 900 || !dialog_id) && <DialogList/>}
            <Outlet />
        </div>
    )
}