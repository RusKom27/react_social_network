import React, {useEffect} from "react"
import styles from "./Profile.module.scss"
import PostsList from "./PostsList/PostsList";
import PostCreationInput from "./PostCreationInput/PostCreationInput";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {loginUser, setPosts} from "../../redux/actions";
import {connect} from "react-redux";
import {getUserByToken} from "../../packages/api/rest/user";
import {getPosts} from "../../packages/api/rest/post";


const Profile = ({loginUser, setPosts, token}) => {
    if (token) getUserByToken().then(user => {
        loginUser(user.data)
    })
    getPosts().then(posts => {
        setPosts(posts.data)
    })

    return (
        <div className={styles.container}>
            <ProfileInfo/>
            <PostCreationInput/>
            <PostsList/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    token: state.auth.token
})

export default connect(mapStateToProps, {loginUser, setPosts})(Profile)
