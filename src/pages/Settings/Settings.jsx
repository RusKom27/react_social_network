import {NavLink, Outlet, useParams} from "react-router-dom";

import styles from "./Settings.module.scss"

function Settings() {
    const activeClassName = ({isActive}) => isActive ? styles.active : undefined
    return (
        <div className={styles.container}>
            <div className={styles.navigation}>
                <NavLink className={activeClassName} to={"account"}>Account</NavLink>
                <NavLink className={activeClassName} to={"security"}>Security</NavLink>
            </div>
            <div className={styles.page_container}>
                <Outlet/>
            </div>
        </div>
    )
}

export {Settings}