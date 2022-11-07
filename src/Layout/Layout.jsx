import {Header} from "../components/Header/Header";
import {Navigation} from "../components/Navigation/Navigation";
import styles from "./Layout.module.scss"

function Layout({children}) {
    return (
        <div className={styles.wrapper}>
            <Header/>
            <main>
                <Navigation/>
                {children}
            </main>
        </div>
    )
}

export {Layout}