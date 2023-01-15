import React, {memo} from "react"
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

import styles from "./UserPostInfo.module.scss"

export const UserPostInfo = memo(({user_id}) => {
    const user = useSelector(state => state.users.users.filter(user => user._id === user_id)[0])
    if (!user) return <div>Loading</div>

    return (
        <div className={styles.container}>
            <Link to={`../../profile/${user.login}`}>
                {user.name} <span>@{user.login}</span>
            </Link>
        </div>
    )
})