import React, {useEffect} from "react"
import styles from "./Profile.module.scss"
import {PostsList} from "../../components";
import PostCreationInput from "./PostCreationInput/PostCreationInput";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {loginUser, setPosts} from "../../redux/actions";
import {connect} from "react-redux";
import {getUserByToken} from "../../packages/api/rest/user";
import {getPosts} from "../../packages/api/rest/post";
import {useParams} from "react-router-dom";


const Profile = ({loginUser, setPosts, token}) => {
    const user_login = useParams().login
    if (token) getUserByToken().then(user => {
        loginUser(user.data)
    })

    const updatePosts = () => {
        if (window.location.href.split("/").at(-1) !== user_login) return
        getPosts().then(posts => {
            setPosts(posts.data)
        })
        setTimeout(updatePosts, 1000)
    }

    updatePosts()


    return (
        <div className={styles.container}>
            <ProfileInfo/>
            <PostCreationInput/>
            <PostsListContainer/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    token: state.auth.token
})


const PostsListContainer = connect(
    state => ({posts: state.profile.posts})
)(PostsList)

export default connect(mapStateToProps, {loginUser, setPosts})(Profile)
