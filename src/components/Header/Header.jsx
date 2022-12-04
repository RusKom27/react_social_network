import React from "react"
import styles from "./Header.module.scss"
import {ReactComponent as MenuSVG} from "../../images/hamburger-menu.svg"
import {connect, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {logoutUser, toggleMenuTab} from "../../redux/actions";


function Header({logoutUser, toggleMenuTab}) {
    const navigate = useNavigate()
    const token = useSelector(state => state.auth.token)

    const logout = (event) => {
        logoutUser()
        navigate("/auth/login")
    }

    return (
        <header className={styles.header}>
            {token && <div onClick={() => toggleMenuTab()} className={styles.hamburger_button}><MenuSVG/></div>}
            <div className={styles.logo}>ReactSocialNetwork</div>
            <div>Search</div>
            <div>
                <button onClick={logout}>Logout</button>
            </div>
        </header>
    )
}

const mapStateToProps = () => ({})

export default connect(mapStateToProps, {logoutUser, toggleMenuTab})(Header)