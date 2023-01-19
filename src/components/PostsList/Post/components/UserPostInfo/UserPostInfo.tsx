import React, {FC, memo} from "react"
import {Link} from "react-router-dom";

import styles from "./UserPostInfo.module.scss"
import {useQuery} from "@tanstack/react-query";
import {UserAPI} from "../../../../../packages/api";

type PropsType = {
    user_id: string
}

export const UserPostInfo: FC<PropsType> = memo(({user_id}) => {
    const { isLoading, error, data: user } = useQuery({
        queryKey: ['users', user_id],
        queryFn: () =>
            UserAPI.getUserById(user_id).then(
                (res) => res.data,
            ),
    })
    if (isLoading) return <div>Loading...</div>

    return (
        <div className={styles.container}>
            <Link to={`../../profile/${user.login}`}>
                {user.name} <span>@{user.login}</span>
            </Link>
        </div>
    )
})