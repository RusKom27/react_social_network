import React from "react"
import {NavLink} from "react-router-dom";
import {connect, useSelector} from "react-redux";

import {ReactComponent as MessageSVG} from "../../images/message.svg"
import {ReactComponent as ProfileSVG} from "../../images/profile.svg"
import {ReactComponent as SettingsSVG} from "../../images/settings.svg"
import {ReactComponent as FeedSVG} from "../../images/view-list.svg"
import {toggleMenuTab} from "../../redux/actionCreators/app";

import styles from "./Navigation.module.scss"

function Navigation({toggleMenuTab}) {
    const current_user = useSelector(state => state.auth.current_user)
    const isMenuTabOpened = useSelector(state => state.app.isMenuTabOpened)
    const dialogs = useSelector(state => state.messages.dialogs)

    const unchecked_messages_count = dialogs?.reduce((dialogs_acc, dialog) => {
        return dialogs_acc + dialog.messages.reduce((acc, message) =>
            (!message.checked && message.sender._id !== current_user._id) ? acc + 1 : acc, 0
        )
    }, 0)



    const activeClassName = ({isActive}) => isActive ? styles.active : undefined

    return (
        <nav className={`${styles.navigation} ${(isMenuTabOpened ? styles.hidden : '')}`}>
            <div>
                <NavLink onClick={() => toggleMenuTab(true)} className={activeClassName} to="/">
                    <FeedSVG/>
                    <div>Feed</div>
                </NavLink>
                <NavLink onClick={() => toggleMenuTab(true)} className={activeClassName} to={`/profile/${current_user?.login}`}>
                    <ProfileSVG/>
                    <div>Profile</div>
                </NavLink>
                <NavLink onClick={() => toggleMenuTab(true)} className={activeClassName} to="/messages">
                    <MessageSVG/>
                    <div>Messages</div>
                    {unchecked_messages_count > 0 && <div className={styles.notification}>{unchecked_messages_count}</div>}
                </NavLink>
                <NavLink onClick={() => toggleMenuTab(true)} className={activeClassName} to="/settings">
                    <SettingsSVG/>
                    <div>Settings</div>
                </NavLink>
            </div>
        </nav>
    )
}

const mapStateToProps = () => ({})

export default connect(mapStateToProps, {toggleMenuTab})(Navigation)