import styles from "./Messages.module.scss"
import {Outlet, useParams} from "react-router-dom";
import DialogList from "./DialogList/DialogList";
import {useWindowDimensions} from "../../hooks/useWindowDimensions";
import {connect} from "react-redux";
import {getDialogs} from "../../packages/api/rest/dialog";
import {setDialogs} from "../../redux/actions";
import {useEffect} from "react";

function Messages({setDialogs, messages}) {
    const {width} = useWindowDimensions()
    const {dialog_id} = useParams()
    useEffect(() => {
        getDialogs().then(dialogs => {
            setDialogs(dialogs.data)
        })
    }, [messages])
    return (
        <div className={styles.container}>
            {(width > 900 || !dialog_id) && <DialogList/>}
            <Outlet />
        </div>
    )
}

const mapStateToProps = (state) => ({
    messages: state.messages.messages
})

export default connect(mapStateToProps, {setDialogs})(Messages)