import React, {memo, useEffect} from "react"

import {useOnScreen} from "../../../../../hooks";
import {postApi} from "../../../../../services";
import {IPost} from "../../../../../models";
import {useAppSelector} from "../../../../../hooks/redux";

import styles from "./UserCheckObserver.module.scss"

type PropsType = {
    post: IPost
}

export const UserCheckObserver = memo<PropsType>(({post}) => {
    const {isVisible, ref} = useOnScreen()
    const [checkPost] = postApi.useCheckPostMutation()
    const current_user = useAppSelector(state => state.auth.current_user)
    const isViewed = current_user && post.views.includes(current_user?._id)

    useEffect(() => {
        if (post && isVisible && !isViewed && post.author_id !== current_user?._id) {
            checkPost(post._id)
        }
    }, [isVisible])

    return <div className={styles.container} ref={ref}></div>
})