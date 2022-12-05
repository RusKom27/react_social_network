import React from "react"
import styles from "./DialogList.module.scss"
import {DialogListItem} from "./DialogListItem/DialogListItem";
import {connect} from "react-redux";
import {toggleMenuTab} from "../../../redux/actions";

const DialogList = ({dialogs, toggleMenuTab}) => {
    console.log(dialogs[0])
    const dialogsList = dialogs.map(
        dialog => <DialogListItem
            key={dialog.id}
            id={dialog.id}
            member={dialog.members[0]}
            message={dialog.messages.at(-1)}
            toggleMenuTab={toggleMenuTab}
        />
    )

    return (
        <div className={styles.dialogs_list}>
            {dialogsList}
        </div>
    )
}

const mapStateToProps = (state) => ({
    dialogs: state.messages.dialogs,
    isMenuTabOpened: state.menu.isMenuTabOpened
})

export default connect(mapStateToProps, {toggleMenuTab})(DialogList)