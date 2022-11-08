import styles from "./Navigation.module.scss"
import {NavLink} from "react-router-dom";

function Navigation() {
    return (
        <nav className={styles.navigation}>
            <div>
                <NavLink to="/profile">Profile</NavLink>
                <NavLink to="/messages">Messages</NavLink>
                <NavLink to="/settings">Settings</NavLink>
            </div>
        </nav>
    )
}

export {Navigation}