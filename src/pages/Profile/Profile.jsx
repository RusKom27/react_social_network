import React from "react"
import styles from "./Profile.module.scss"
import {PostsListContainer} from "./PostsList/PostsListContainer";
import {PostCreationInputContainer} from "./PostCreationInput/PostCreationInputContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {loginUser} from "../../redux/actions";
import {connect} from "react-redux";
import {getUserByToken} from "../../packages/api/rest/user";


const Profile = ({loginUser, token}) => {
    if (token) getUserByToken(token).then(user => {
        loginUser(user.data)
    })
    return (
        <div className={styles.container}>
            <ProfileInfo/>
            <PostCreationInputContainer/>
            <PostsListContainer/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    token: state.auth.token
})

export default connect(mapStateToProps, {loginUser})(Profile)