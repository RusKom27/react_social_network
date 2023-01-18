import React from "react"

import {ReactComponent as MenuSVG} from "../../static/images/svg/hamburger-menu.svg"
import {toggleMenuTab} from "../../redux/reducers/app";
import {SearchForm} from "../../forms";
import {Button} from "../misc/Button/Button";
import {SearchResults} from "../misc/SearchResults/SearchResults";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";

import styles from "./Header.module.scss"

export const Header = () => {
    const token = useAppSelector(state => state.auth.token)
    const isMenuTabOpened = useAppSelector(state => state.app.isMenuTabOpened)
    const dispatch = useAppDispatch()

    if (!token) return <header className={styles.header}></header>

    return (
        <header className={styles.header}>
            <div>
                <Button onClick={() => dispatch(toggleMenuTab(!isMenuTabOpened))} style={styles.hamburger_button}>
                    <MenuSVG/>
                </Button>
            </div>
            <div className={styles.logo}>
                ReactSocialNetwork
            </div>
            <div className={styles.search}>
                <SearchForm/>
            </div>
            <SearchResults/>
        </header>
    )
}