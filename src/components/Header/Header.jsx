import React from "react"
import styles from "./Header.module.scss"
import {ReactComponent as MenuSVG} from "../../images/hamburger-menu.svg"


function Header({toggleMenuTab, isMenuTabOpened}) {

    return (
        <header className={styles.header}>
            <div onClick={() => {
                toggleMenuTab()
                console.log(isMenuTabOpened);
            }} className={styles.hamburger_button}><MenuSVG/></div>
            <div className={styles.logo}>ReactSocialNetwork</div>
            <div>Search</div>
            <div>Profile</div>
        </header>
    )
}

export {Header}