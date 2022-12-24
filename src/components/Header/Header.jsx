import React from "react"
import styles from "./Header.module.scss"
import {ReactComponent as MenuSVG} from "../../images/hamburger-menu.svg"
import {connect, useSelector} from "react-redux";
import {toggleMenuTab} from "../../redux/actionCreators/menu";


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