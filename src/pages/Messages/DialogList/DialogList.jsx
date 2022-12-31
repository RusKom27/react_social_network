import React from "react"
import {connect, useSelector} from "react-redux";

import {Loader} from "../../../components";
import {toggleMenuTab} from "../../../redux/actionCreators/menu";
import {DialogListItem} from "./DialogListItem/DialogListItem";

import styles from "./DialogList.module.scss"

const DialogList = ({toggleMenuTab}) => {
    const current_user = useSelector(state => state.auth.current_user)
    const dialogs = useSelector(state => state.messages.dialogs)

    if (!dialogs) return <Loader/>

    const dialogsList = dialogs.map(dialog => {
        let unchecked_messages_count = dialog.messages.reduce((acc, message) =>
            (!message.checked && message.sender._id !== current_user._id) ? acc + 1 : acc, 0
        )

        return <DialogListItem
                key={dialog._id}
                id={dialog._id}
                member_names={dialog.members.filter(member => member.login !== current_user.login).map(member => member.name).join(',')}
                last_message={dialog.messages.at(-1)}
                unchecked_messages_count={unchecked_messages_count}
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

const mapStateToProps = (state) => ({})

export default connect(
    mapStateToProps,
    {toggleMenuTab}
)(DialogList)