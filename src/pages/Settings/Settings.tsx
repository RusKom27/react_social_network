import React, {useEffect} from "react";
import {NavLink, Outlet} from "react-router-dom";

import {getUserByToken} from "../../redux/thunk";
import {useAppDispatch} from "../../hooks/redux";

import styles from "./Settings.module.scss"

export const Settings = () => {
    const dispatch = useAppDispatch()
    const activeClassName: (isActive: any) => any = ({isActive}) => isActive ? styles.active : undefined
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