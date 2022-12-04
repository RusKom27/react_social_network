import React from "react"
import {ReactComponent as MessageSVG} from "../../images/message.svg"
import {ReactComponent as ProfileSVG} from "../../images/profile.svg"
import {ReactComponent as SettingsSVG} from "../../images/settings.svg"
import {ReactComponent as FeedSVG} from "../../images/view-list.svg"
import styles from "./Navigation.module.scss"
import {NavLink} from "react-router-dom";
import {connect, useSelector} from "react-redux";
import {toggleMenuTab} from "../../redux/actions";


function Navigation({toggleMenuTab}) {
    const isMenuTabOpened = useSelector(state => state.menu.isMenuTabOpened)
    const activeClassName = ({isActive}) => isActive ? styles.active : undefined

    return (
        <nav className={styles.navigation + " " + (isMenuTabOpened ? styles.hidden : '')}>
            <div>
                <NavLink onClick={() => toggleMenuTab(true)} className={activeClassName} to="/">
                    <FeedSVG/>
                    <div>Feed</div>
                </NavLink>
                <NavLink onClick={() => toggleMenuTab(true)} className={activeClassName} to="/profile">
                    <ProfileSVG/>
                    <div>Profile</div>
                </NavLink>
                <NavLink onClick={() => toggleMenuTab(true)} className={activeClassName} to="/messages">
                    <MessageSVG/>
                    <div>Messages</div>
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