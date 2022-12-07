import React, {useEffect} from "react"
import styles from "./Profile.module.scss"
import {PostsList} from "../../components";
import PostCreationInput from "./PostCreationInput/PostCreationInput";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {loginUser, setPosts, setUser} from "../../redux/actions";
import {connect, useSelector} from "react-redux";
import {getUserByLogin} from "../../packages/api/rest/user";
import {getPosts} from "../../packages/api/rest/post";
import {useParams} from "react-router-dom";


const Profile = ({setPosts, setUser}) => {
    const user_login = useParams().login
    const other_user = useSelector(state => state.auth.other_user)
    const current_user = useSelector(state => state.auth.current_user)
    window.scrollTo(0, 0);
    useEffect(() => {
        if (current_user.login !== user_login) {
            getUserByLogin(user_login).then(user => {
                setUser(user.data)
            })
        }
    }, [user_login])



    const updatePosts = () => {
        if (window.location.href.split("/").at(-1) !== user_login) return
        getPosts(user_login).then(posts => {
            setPosts(posts.data)
        })
        setTimeout(updatePosts, 1000)
    }

    updatePosts()

    return (
        <div className={styles.container}>
            <ProfileInfo user={current_user.login !== user_login ? other_user : current_user}/>
            {current_user.login === user_login && <PostCreationInput/>}
            <PostsListContainer/>
        </div>
    )
}

const mapStateToProps = (state) => ({
})


const PostsListContainer = connect(
    state => ({posts: state.profile.posts})
)(PostsList)

export default connect(mapStateToProps, {setUser, loginUser, setPosts})(Profile)
