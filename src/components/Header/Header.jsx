import styles from "./Header.module.scss"

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>ReactSocialNetwork</div>
            <div>Search</div>
            <div>Profile</div>
        </header>
    )
}

export {Header}