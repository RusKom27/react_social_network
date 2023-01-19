import React from "react";
import {Outlet} from "react-router-dom"

import {Header, Navigation, AppInitialization, AppNotificationsContainer} from "../components";
import {useAppSelector} from "../hooks/redux";

import styles from "./Layout.module.scss"

export const Layout = () => {
    const token = useAppSelector(state => state.auth.token)

    return (
        <div className={styles.wrapper}>
            <AppNotificationsContainer/>
            <AppInitialization token={token}/>
            <Header/>
            <main>
                {token && <Navigation/>}
                <Outlet />
            </main>
        </div>
    )
}