import React from "react"
import styles from "./Navigation.module.scss"
import {NavLink} from "react-router-dom";

function Navigation() {

    const activeClassName = ({isActive}) => isActive ? styles.active : undefined

    return (
        <nav className={styles.navigation}>
            <div>
                <NavLink className={activeClassName} to="/profile">Profile</NavLink>
                <NavLink className={activeClassName} to="/messages">Messages</NavLink>
                <NavLink className={activeClassName} to="/settings">Settings</NavLink>
            </div>
        </nav>
    )
}

export {Navigation}