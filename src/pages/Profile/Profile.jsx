import React, {useEffect} from "react"
import {useParams} from "react-router-dom";
import {loginUser} from "../../redux/actions";
import {connect, useSelector} from "react-redux";
import {getPosts, getUser} from "../../redux/thunk";

import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostCreationInput from "./PostCreationInput/PostCreationInput";
import {Loader, PostsList} from "../../components";

import styles from "./Profile.module.scss"

const Profile = ({getPosts, getUser}) => {
    const user_login = useParams().login
    let isUpdatePosts = true
    const user = useSelector(state => state.profile.user)
    const current_user = useSelector(state => state.auth.current_user)

    const updatePosts = () => {
        if (isUpdatePosts) {
            getPosts(user_login)
            setTimeout(updatePosts, 1000)
        }
    }

    useEffect(() => {
        getUser(user_login)
    }, [user_login])

    useEffect(() => {
        updatePosts()
        return () => {isUpdatePosts = false}
    })

    window.scrollTo(0, 0);

    return (
        <div className={styles.container}>
            {!user ? <Loader/> :
                !user._id ? <div>User not found!</div> :
                    <>
                        <ProfileInfo user={user}/>
                        {user?.login === current_user?.login && <PostCreationInput/>}
                        <PostsList/>
                    </>
            }
        </div>
    )
}

const mapStateToProps = (state) => ({})

export default connect(
    mapStateToProps,
    {getUser, loginUser, getPosts}
)(Profile)
