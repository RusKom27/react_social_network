import React from "react"
import {useDispatch, useSelector} from "react-redux";

import {ReactComponent as MenuSVG} from "../../static/images/svg/hamburger-menu.svg"
import {toggleMenuTab} from "../../redux/slices/app";

import styles from "./Header.module.scss"

export const Header = () => {
    const token = useSelector(state => state.auth.token)
    const dispatch = useDispatch()

    return (
        <header className={styles.header}>
            {token && <div onClick={() => dispatch(toggleMenuTab())} className={styles.hamburger_button}><MenuSVG/></div>}
            <div className={styles.logo}>ReactSocialNetwork</div>
            <div>Search</div>
        </header>
    )
}