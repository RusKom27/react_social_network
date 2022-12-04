import React, {useEffect} from "react"
import {Header, Navigation} from "../components";
import {Outlet, useNavigate} from "react-router-dom"
import styles from "./Layout.module.scss"
import {useSelector} from "react-redux";
import {config} from "../packages/api/config";

export const Layout = () => {
    const navigate = useNavigate()
    const token = useSelector(state => state.auth.token)
    config.token = token
    useEffect(() => {
        if (!token) navigate("/auth/login")
    }, [token])

    return (
        <div className={styles.wrapper}>
            <Header/>
            <main>
                {token && <Navigation/>}
                <Outlet/>
            </main>
        </div>
    )
}