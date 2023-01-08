import {NavLink, Outlet} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch} from "react-redux";

import {getUserByToken} from "../../redux/thunk";

import styles from "./Settings.module.scss"

export const Settings = () => {
    const dispatch = useDispatch()
    const activeClassName = ({isActive}) => isActive ? styles.active : undefined
    useEffect(() => {
        dispatch(getUserByToken())
    })

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