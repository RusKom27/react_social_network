import React from "react"
import {connect} from "react-redux";

import {Loader} from "../../../components";
import {toggleMenuTab} from "../../../redux/actionCreators/menu";
import {DialogListItem} from "./DialogListItem/DialogListItem";

import styles from "./DialogList.module.scss"

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

export default connect(
    mapStateToProps,
    {toggleMenuTab}
)(DialogList)