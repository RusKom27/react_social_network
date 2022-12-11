import React from "react"
import styles from "./DialogList.module.scss"
import {DialogListItem} from "./DialogListItem/DialogListItem";
import {connect} from "react-redux";
import {setDialogs, toggleMenuTab} from "../../../redux/actions";
import {Loader} from "../../../components/Loader/Loader";

const DialogList = ({dialogs, toggleMenuTab}) => {
    if (!dialogs) return <Loader/>
    const dialogsList = dialogs.map(dialog => {
        if (dialog) return <DialogListItem
                key={dialog.id}
                id={dialog.id}
                member={dialog.members[1]}
                message={dialog.message}
                toggleMenuTab={toggleMenuTab}
            />
        }
    )

    return (
        <div className={styles.dialogs_list}>
            {dialogsList}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        dialogs: state.messages.dialogs,
        isMenuTabOpened: state.menu.isMenuTabOpened
    }
}

export default connect(mapStateToProps, {toggleMenuTab, setDialogs})(DialogList)