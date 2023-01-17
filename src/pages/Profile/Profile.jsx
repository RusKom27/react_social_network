import React, {useEffect} from "react"
import {useParams} from "react-router-dom";

import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostCreationInput} from "./PostCreationInput/PostCreationInput";
import {Loader, PostsList, SideBar} from "../../components";

import styles from "./Profile.module.scss"
import {postApi, userApi} from "../../services";

export const Profile = () => {
    const userLogin = useParams().login
    const {data: current_user} = userApi.useAuthUserByTokenQuery()
    const {data: user, isLoading, error} = userApi.useFetchUserByLoginQuery(userLogin)
    const {data: posts, postListIsLoading} = postApi.useFetchPostListByUserLoginQuery(userLogin)

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [userLogin])

    if (isLoading) return <div className={styles.container}><Loader/></div>
    if (error) return <div className={styles.container}>{error.data.message}</div>

    return (
        <div className={styles.container}>
            <ProfileInfo user={user}/>
            {user?.login === current_user?.login && <PostCreationInput/>}
            <div className={styles.posts_container}>
                <PostsList
                    posts={posts}
                    isLoading={postListIsLoading}
                />
                <SideBar>
                </SideBar>
            </div>
        </div>
    )
}

