import React from "react"
import styles from "./PostsList.module.scss"
import Post from "../Post/Post";
import {Loader} from "../Loader/Loader";
import {connect} from "react-redux";


const PostsList = ({posts}) => {
    if (!posts) return <Loader/>
    let postComponents = posts.map((post) => <Post key={post._id} post={post}/>)

    return (
        <div>
            <h2>Posts</h2>
            <div className={styles.posts_list}>
                {postComponents}
            </div>
        </div>
    )
}

export default connect(
    state => ({posts: state.posts.posts})
)(PostsList)
