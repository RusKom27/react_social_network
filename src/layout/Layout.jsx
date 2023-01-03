import React, {useEffect} from "react"
import {Header, Navigation} from "../components";
import {Outlet, useNavigate} from "react-router-dom"
import styles from "./Layout.module.scss"
import {connect, useSelector} from "react-redux";
import {config} from "../packages/api/config";
import {authUserByToken, getMessages} from "../redux/thunk";
import AppInitialization from "../AppInitialization";


const Layout = ({authUserByToken, getMessages}) => {
    const token = useSelector(state => state.auth.token)

    return (
        <div className={styles.wrapper}>
            <AppInitialization token={token}/>
            <Header/>
            <main>
                {token && <Navigation/>}
                <Outlet/>
            </main>
        </div>
    )
}

export default connect(null, {authUserByToken, getMessages})(Layout)