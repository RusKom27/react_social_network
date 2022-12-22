import {Outlet, useParams} from "react-router-dom";
import {connect} from "react-redux";

import DialogList from "./DialogList/DialogList";
import {useWindowDimensions} from "../../hooks/useWindowDimensions";

import styles from "./Messages.module.scss"

function Messages() {
    const {width} = useWindowDimensions()
    const {dialog_id} = useParams()

    return (
        <div className={styles.container}>
            {(width > 900 || !dialog_id) && <DialogList/>}
            <Outlet />
        </div>
    )
}

const mapStateToProps = (state) => ({
    messages: state.messages.dialogs
})

export default connect(mapStateToProps)(Messages)