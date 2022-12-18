import styles from "./Messages.module.scss"
import {Outlet, useParams} from "react-router-dom";
import DialogList from "./DialogList/DialogList";
import {useWindowDimensions} from "../../hooks/useWindowDimensions";
import {connect} from "react-redux";
import {useEffect} from "react";

function Messages({messages}) {
    const {width} = useWindowDimensions()
    const {dialog_id} = useParams()
    useEffect(() => {
        // getDialogs()
    }, [messages])

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