import styles from "./Messages.module.scss"
import {Outlet, useParams} from "react-router-dom";
import {DialogListContainer} from "./DialogList/DialogListContainer";
import {useWindowDimensions} from "../../hooks/useWindowDimensions";

function Messages() {
    const {width} = useWindowDimensions()
    const {dialog_id} = useParams()

    return (
        <div className={styles.container}>
            {(width > 900 || !dialog_id) && <DialogListContainer/>}
            <Outlet />
        </div>
    )
}

export {Messages}