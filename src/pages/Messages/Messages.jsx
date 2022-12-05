import styles from "./Messages.module.scss"
import {Outlet, useParams} from "react-router-dom";
import DialogList from "./DialogList/DialogList";
import {useWindowDimensions} from "../../hooks/useWindowDimensions";
import {getDialogs} from "../../packages/api/rest/dialog";
import {connect, useSelector} from "react-redux";
import {addMessage, setMessages} from "../../redux/actions";

function Messages({setMessages}) {
    const {width} = useWindowDimensions()
    const {dialog_id} = useParams()

    getDialogs().then(dialogs => {
        setMessages(dialogs.data)
    })

    return (
        <div className={styles.container}>
            {(width > 900 || !dialog_id) && <DialogList/>}
            <Outlet />
        </div>
    )
}

const mapStateToProps = (state) => ({
})

export default connect(mapStateToProps, {setMessages})(Messages)