import React from "react"
import styles from "./Header.module.scss"
import {ReactComponent as MenuSVG} from "../../images/hamburger-menu.svg"
import {getUser} from "../../packages/api/rest/user";
import {connect, useSelector} from "react-redux";
import {loginUser, logoutUser, toggleMenuTab} from "../../redux/actions";


function Header({loginUser, logoutUser, toggleMenuTab}) {
    const isMenuTabOpened = useSelector(state => state.menu.isMenuTabOpened)

    const login = (event) => {
        getUser("email1", "password1").then(user => {
            loginUser(user.data)
        })
    }

    const logout = (event) => {
        logoutUser()
    }

    return (
        <header className={styles.header}>
            <div onClick={() => {
                toggleMenuTab()
                console.log(isMenuTabOpened);
            }} className={styles.hamburger_button}><MenuSVG/></div>
            <div className={styles.logo}>ReactSocialNetwork</div>
            <div>Search</div>
            <div>
                <button onClick={login}>Login</button>
                <button onClick={logout}>Logout</button>
            </div>
        </header>
    )
}

const mapStateToProps = () => ({})

export default connect(mapStateToProps, {loginUser, logoutUser, toggleMenuTab})(Header)