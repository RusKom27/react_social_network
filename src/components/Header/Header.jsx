import React from "react"
import {connect, useSelector} from "react-redux";

import {ReactComponent as MenuSVG} from "../../images/hamburger-menu.svg"
import {toggleMenuTab} from "../../redux/actionCreators/menu";

import styles from "./Header.module.scss"

function Header({toggleMenuTab}) {
    const token = useSelector(state => state.auth.token)

    return (
        <header className={styles.header}>
            {token && <div onClick={() => toggleMenuTab()} className={styles.hamburger_button}><MenuSVG/></div>}
            <div className={styles.logo}>ReactSocialNetwork</div>
            <div>Search</div>
        </header>
    )
}

const mapStateToProps = () => ({})

export default connect(mapStateToProps, {toggleMenuTab})(Header)