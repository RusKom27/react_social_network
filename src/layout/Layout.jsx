import React, {useEffect} from "react"
import {Header, Navigation} from "../components";
import {Outlet, useNavigate} from "react-router-dom"
import styles from "./Layout.module.scss"
import {connect, useSelector} from "react-redux";
import {config} from "../packages/api/config";
import {UserAPI} from "../packages/api/rest/user";
import {loginUser} from "../redux/actions";

const Layout = ({loginUser}) => {
    const navigate = useNavigate()
    const token = useSelector(state => state.auth.token)
    config.token = token
    useEffect(() => {
        if (token) UserAPI.getUserByToken().then(user => { loginUser(user.data) })
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

export default connect(mapStateToProps, {loginUser})(Layout)