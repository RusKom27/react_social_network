import styles from "./Navigation.module.scss"
import {NavLink} from "react-router-dom";

function Navigation() {
    return (
        <nav className={styles.navigation}>
            <NavLink to="/profile">Profile</NavLink>
            <NavLink to="#">Messages</NavLink>
            <NavLink to="/settings">Settings</NavLink>
        </nav>
    )
}

export {Navigation}