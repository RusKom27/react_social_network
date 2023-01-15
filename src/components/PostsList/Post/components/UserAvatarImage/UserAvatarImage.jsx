import React, {memo} from "react"
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

import styles from "./UserAvatarImage.module.scss"
import {Image} from "../../../../misc/Image/Image"

export const UserAvatarImage = memo(({user_id}) => {
    const user = useSelector(state => state.users.users.filter(user => user._id === user_id)[0])
    if (!user) return <div>Loading...</div>

    return (
        <div className={styles.container}>
            <Link to={`../../profile/${user.login}`}>
                <Image image_name={user.images.avatar_image.small}/>
            </Link>
        </div>
    )
})