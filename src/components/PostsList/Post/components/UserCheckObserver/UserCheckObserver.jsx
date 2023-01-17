import React, {memo, useEffect} from "react"

import {useOnScreen} from "../../../../../hooks";
import {postApi} from "../../../../../services";

import styles from "./UserCheckObserver.module.scss"

export const UserCheckObserver = memo(({post, current_user}) => {
    const [isVisible, ref] = useOnScreen()
    const [checkPost] = postApi.useCheckPostMutation()
    const isViewed = post.views.includes(current_user._id)

    useEffect(() => {
        if (post && isVisible && !isViewed && post.author_id !== current_user._id) {
            checkPost(post._id)
        }
    }, [isVisible])

    return <div className={styles.container} ref={ref}></div>
})