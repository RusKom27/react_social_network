import React, {useEffect} from "react"
import styles from "./Profile.module.scss"
import {PostsList} from "../../components";
import PostCreationInput from "./PostCreationInput/PostCreationInput";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {loginUser} from "../../redux/actions";
import {connect, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {Loader} from "../../components/Loader/Loader";
import {getPosts} from "../../redux/thunk/post";
import {getUser} from "../../redux/thunk/user";

const Profile = ({getPosts, getUser}) => {
    const user_login = useParams().login
    let isUpdatePosts = true
    let user = useSelector(state => {
        if (state.auth.current_user?.login === user_login) return state.auth.current_user
        else return state.auth.other_user
    })

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

    if (!user) return <Loader/>
    else if (!user._id) return <div>User not found</div>

    window.scrollTo(0, 0);

    return (
        <div className={styles.container}>
            <ProfileInfo user={user}/>
            {user?.login === user_login && <PostCreationInput/>}
            <PostsList/>
        </div>
    )
}

const mapStateToProps = (state) => ({})

export default connect(
    mapStateToProps,
    {getUser, loginUser, getPosts}
)(Profile)
