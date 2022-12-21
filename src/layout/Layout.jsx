import React, {useEffect} from "react"
import {Header, Navigation} from "../components";
import {Outlet, useNavigate} from "react-router-dom"
import styles from "./Layout.module.scss"
import {connect, useSelector} from "react-redux";
import {config} from "../packages/api/config";
import {authUserByToken, getMessages} from "../redux/thunk";


const Layout = ({authUserByToken, getMessages}) => {
    const navigate = useNavigate()
    const token = useSelector(state => state.auth.token)

    config.token = token
    useEffect(() => {
        getMessages()
        if (token) authUserByToken()
        else navigate("/auth/login")
    }, [token])

    return (
        <div className={styles.wrapper}>
            <Header/>
            <main>
                {token && <Navigation/>}
                <Outlet/>
            </main>
        </div>
    )
}

const mapStateToProps = (state) => ({
})

export default connect(mapStateToProps, {authUserByToken, getMessages})(Layout)