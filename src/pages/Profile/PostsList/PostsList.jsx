import React from "react"
import styles from "./PostsList.module.scss"
import Post from "./Post/Post";
import {connect, useSelector} from "react-redux";


function PostsList() {
    const posts = useSelector(state => state.profile.posts)
    let postComponents = posts.map((post) => <Post key={post.id} post={post}/>)

    return (
        <div>
            <h2>Posts</h2>
            <div className={styles.posts_list}>
                {postComponents}
            </div>
        </div>
    )
}

const mapStateToProps = state => ({})

export default connect(mapStateToProps)(PostsList)