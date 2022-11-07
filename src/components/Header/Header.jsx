import styles from "./Header.module.scss"

function Header() {
    return (
        <header className={styles.header}>
            <div>ReactSocialNetwork</div>
            <div>Search</div>
            <div>Profile</div>
        </header>
    )
}

export {Header}