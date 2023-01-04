import {Outlet} from "react-router-dom"
import {connect, useSelector} from "react-redux";

import {Header, Navigation, AppInitialization, AppNotificationsContainer} from "../components";

import styles from "./Layout.module.scss"

const Layout = () => {
    const token = useSelector(state => state.auth.token)

    return (
        <>

            <div className={styles.wrapper}>
                <AppNotificationsContainer/>
                <AppInitialization token={token}/>

                <Header/>
                <main>
                    {token && <Navigation/>}
                    <Outlet/>
                </main>
            </div>

        </>
)
}

export default connect(null, {})(Layout)