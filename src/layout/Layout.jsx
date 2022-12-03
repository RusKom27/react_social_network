import React from "react"
import {Header, Navigation} from "../components";
import {Outlet} from "react-router-dom"
import styles from "./Layout.module.scss"
import {useSelector} from "react-redux";

export const Layout = () => {
    const token = useSelector(state => state.auth.token)
    return (
        <div className={styles.wrapper}>
            <Header/>
            <main>
                <Navigation/>
                {token && <Outlet/>}
            </main>
        </div>
    )
}