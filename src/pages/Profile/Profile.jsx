import React, {useEffect} from "react"
import styles from "./Profile.module.scss"
import {PostsList} from "../../components";
import PostCreationInput from "./PostCreationInput/PostCreationInput";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {loginUser, setPosts, setUser} from "../../redux/actions";
import {connect, useSelector} from "react-redux";
import {UserAPI} from "../../packages/api/rest/user";
import {PostAPI} from "../../packages/api/rest/post";
import {useParams} from "react-router-dom";
import {Loader} from "../../components/Loader/Loader";


const Profile = ({setPosts, setUser}) => {
    const user_login = useParams().login
    let user = useSelector(state => {
        if (state.auth.current_user?.login === user_login) return state.auth.current_user
        else return state.auth.other_user
    })
    useEffect(() => {
        UserAPI.getUserByLogin(user_login).then(user => {
            setUser(user.data)
        }).catch(() => setUser({}))
    }, [user_login])

    if (!user) return <Loader/>
    else if (!user._id) return <div>User not found</div>

    window.scrollTo(0, 0);

    const updatePosts = () => {
        if (window.location.href.split("/").at(-1) !== user_login) return
        PostAPI.getPosts(user_login).then(posts => {
            setPosts(posts.data)
            setTimeout(updatePosts, 5000)
        })
    }

    updatePosts()

    return (
        <div className={styles.container}>
            <ProfileInfo user={user}/>
            {user?.login === user_login && <PostCreationInput/>}
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
