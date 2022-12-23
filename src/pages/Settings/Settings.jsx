import {NavLink, Outlet} from "react-router-dom";
import {useEffect} from "react";
import {connect} from "react-redux";

import {getUserByToken} from "../../redux/thunk";

import styles from "./Settings.module.scss"

const Settings = ({getUserByToken}) => {
    const activeClassName = ({isActive}) => isActive ? styles.active : undefined
    useEffect(() => {
        getUserByToken()
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.navigation}>
                <NavLink className={activeClassName} to={"account"}>Account</NavLink>
                <NavLink className={activeClassName} to={"security"}>Security</NavLink>
            </div>
            <div className={styles.page_container}>
                <Outlet/>
            </div>
        </div>
    )
}

const mapStateToProps = () => ({})

export default connect(
    mapStateToProps,
    {getUserByToken}
)(Settings)