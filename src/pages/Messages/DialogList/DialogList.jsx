import React from "react"
import styles from "./DialogList.module.scss"
import {DialogListItem} from "./DialogListItem/DialogListItem";
import {connect} from "react-redux";
import {toggleMenuTab} from "../../../redux/actions";
import {Loader} from "../../../components";

const DialogList = ({dialogs, toggleMenuTab}) => {
    if (!dialogs) return <Loader/>
    const dialogsList = dialogs.map(dialog => {
        if (dialog) return <DialogListItem
                key={dialog._id}
                id={dialog._id}
                member={dialog.members[0]}
                message={dialog.messages.at(-1)}
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

export default connect(mapStateToProps, {toggleMenuTab})(DialogList)