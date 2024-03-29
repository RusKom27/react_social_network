import React, {FC, memo} from "react"
import {Link} from "react-router-dom";

import {useQuery} from "@tanstack/react-query";
import {Image} from "../../../../misc/Image/Image"
import {UserAPI} from "../../../../../packages/api";

import styles from "./UserAvatarImage.module.scss"

type PropsType = {
    user_id: string
}

export const UserAvatarImage: FC<PropsType> = memo(({user_id}) => {
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
                <Image type={"avatar"} image_name={user.images.avatar_image.small}/>
            </Link>
        </div>
    )
})