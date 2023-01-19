import React from "react"
import {NavLink} from "react-router-dom";

import {ReactComponent as MessageSVG} from "../../static/images/svg/message.svg"
import {ReactComponent as ProfileSVG} from "../../static/images/svg/profile.svg"
import {ReactComponent as SettingsSVG} from "../../static/images/svg/settings.svg"
import {ReactComponent as FeedSVG} from "../../static/images/svg/view-list.svg"
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {toggleMenuTab} from "../../redux/reducers/app";
import {IMessage} from "../../models";

import styles from "./Navigation.module.scss"

export const Navigation = () => {
    const current_user = useAppSelector(state => state.auth.current_user)
    const isMenuTabOpened = useAppSelector(state => state.app.isMenuTabOpened)
    const dialogs = useAppSelector(state => state.messages.dialogs)
    const dispatch = useAppDispatch()

    const unchecked_messages_count = dialogs?.reduce((dialogs_acc, dialog) => {
        return dialogs_acc + dialog.messages.reduce((acc: number, message: IMessage) =>
            (!message.checked && message.sender_id !== current_user?._id) ? acc + 1 : acc, 0
        )
    }, 0)

    const activeClassName = (({isActive}) => isActive ? styles.active : undefined) as (isActive: any) => any

    return (
        <nav className={`${styles.navigation} ${(isMenuTabOpened ? styles.hidden : '')}`}>
            <div>
                <NavLink
                    onClick={() => dispatch(toggleMenuTab(true))}
                    className={activeClassName}
                    to="/"
                >
                    <FeedSVG/>
                    <div>Feed</div>
                </NavLink>
                <NavLink
                    onClick={() => dispatch(toggleMenuTab(true))}
                    className={activeClassName}
                    to={`/profile/${current_user?.login}`}
                >
                    <ProfileSVG/>
                    <div>Profile</div>
                </NavLink>
                <NavLink
                    onClick={() => dispatch(toggleMenuTab(true))}
                    className={activeClassName}
                    to="/messages"
                >
                    <MessageSVG/>
                    <div>Messages</div>
                    {unchecked_messages_count > 0 && <div className={styles.notification}>{unchecked_messages_count}</div>}
                </NavLink>
                <NavLink
                    onClick={() => dispatch(toggleMenuTab(true))}
                    className={activeClassName}
                    to="/settings"
                >
                    <SettingsSVG/>
                    <div>Settings</div>
                </NavLink>
            </div>
        </nav>
    )
}