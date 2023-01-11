import React from "react"
import {useDispatch, useSelector} from "react-redux";

import {ReactComponent as MenuSVG} from "../../static/images/svg/hamburger-menu.svg"
import {toggleMenuTab} from "../../redux/reducers/app";
import {SearchForm} from "../../forms";
import {Button} from "../misc/Button/Button";
import {SearchResults} from "../misc/SearchResults/SearchResults";

import styles from "./Header.module.scss"

export const Header = () => {
    const token = useSelector(state => state.auth.token)
    const dispatch = useDispatch()

    return (
        <header className={styles.header}>
            {token && <div>
                <Button onClick={() => dispatch(toggleMenuTab())} style={styles.hamburger_button}><MenuSVG/></Button>
            </div>}
            <div className={styles.logo}>ReactSocialNetwork</div>
            {token && <div className={styles.search}><SearchForm/></div>}
            {token && <SearchResults/>}
        </header>
    )
}