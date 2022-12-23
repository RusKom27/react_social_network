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
    const userLogin = useParams().login
    const user = useSelector(state => state.profile.user)
    const current_user = useSelector(state => state.auth.current_user)

    useEffect(() => {
        getPosts(userLogin)
        getUser(userLogin)
    }, [userLogin])

    window.scrollTo(0, 0);

    return (
        <div className={styles.container}>
            {!user ? <Loader/> :
                !user._id ?
                    <div>User not found!</div> :
                    <>
                        <ProfileInfo user={user}/>
                        {user?.login === current_user?.login && <PostCreationInput/>}
                        <PostsList/>
                    </>
            }
        </div>
    )
}

const mapStateToProps = () => ({})

export default connect(
    mapStateToProps,
    {getUser, loginUser, getPosts}
)(Profile)
