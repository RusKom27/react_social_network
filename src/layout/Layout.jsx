import React from "react"
import {Header, Navigation} from "../components";
import {Outlet} from "react-router-dom"

import styles from "./Layout.module.scss"

function Layout() {
    return (
        <div className={styles.wrapper}>
            <Header/>
            <main>
                <Navigation/>
                {/*{children}*/}
                <Outlet/>
            </main>
        </div>
    )
}

export {Layout}