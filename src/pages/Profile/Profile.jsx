import React, {useEffect} from "react"
import {useParams} from "react-router-dom";
import {connect, useSelector} from "react-redux";

import {checkProfilePost, getProfilePosts, getUser, likeProfilePost, removeProfilePost} from "../../redux/thunk";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostCreationInput from "./PostCreationInput/PostCreationInput";
import {Loader, PostsList} from "../../components";

import styles from "./Profile.module.scss"

const Profile = ({getProfilePosts, getUser, likeProfilePost, removeProfilePost, checkProfilePost}) => {
    const userLogin = useParams().login
    const user = useSelector(state => state.profile.user)
    const {isInitialLoading, posts} = useSelector(state => state.profile)
    const current_user = useSelector(state => state.auth.current_user)

    useEffect(() => {
        getProfilePosts(userLogin)
        getUser(userLogin)
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
                        <PostsList
                            posts={posts}
                            isInitialLoading={isInitialLoading}
                            likePost={likeProfilePost}
                            removePost={removeProfilePost}
                            checkPost={checkProfilePost}
                        />
                    </>
            }
        </div>
    )
}

const mapStateToProps = () => ({})

export default connect(
    mapStateToProps,
    {getUser, getProfilePosts, likeProfilePost, removeProfilePost, checkProfilePost}
)(Profile)
