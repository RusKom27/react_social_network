import React from "react"
import {Header, Navigation} from "../components";
import {Outlet} from "react-router-dom"

import styles from "./Layout.module.scss"

function Layout({isMenuTabOpened, toggleMenuTab}) {
    return (
        <div className={styles.wrapper}>
            <Header isMenuTabOpened={isMenuTabOpened} toggleMenuTab={toggleMenuTab}/>
            <main>
                <Navigation isMenuTabOpened={isMenuTabOpened}/>
                <Outlet/>
            </main>
        </div>
    )
}

export {Layout}