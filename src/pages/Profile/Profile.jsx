import React, {useEffect} from "react"
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {checkProfilePost, getProfilePosts, getUser, likeProfilePost, removeProfilePost} from "../../redux/thunk";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostCreationInput} from "./PostCreationInput/PostCreationInput";
import {Loader, PostsList, SideBar} from "../../components";

import styles from "./Profile.module.scss"
import {postApi} from "../../services";

export const Profile = () => {
    const userLogin = useParams().login
    const user = useSelector(state => state.profile.user)
    // const {isInitialLoading, posts} = useSelector(state => state.profile)
    const current_user = useSelector(state => state.auth.current_user)
    const {data: posts, isLoading} = postApi.useFetchPostListByUserLoginQuery(userLogin)
    const dispatch = useDispatch()

    useEffect(() => {
        // dispatch(getProfilePosts(userLogin))
        dispatch(getUser(userLogin))
        window.scrollTo(0, 0);
    }, [userLogin])

    return (
        <div className={styles.container}>
            {!user ? <Loader/> :
                !user._id ?
                    <div>User not found!</div> :
                    <>
                        <ProfileInfo user={user}/>
                        {user?.login === current_user?.login && <PostCreationInput/>}
                        <div className={styles.posts_container}>
                            <PostsList
                                posts={posts}
                                isLoading={isLoading}
                            />
                            <SideBar>
                            </SideBar>
                        </div>
                    </>
            }
        </div>
    )
}

