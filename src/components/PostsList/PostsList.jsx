import React from "react"
import {connect} from "react-redux";

import Post from "../Post/Post";
import {Loader} from "../misc/Loader/Loader";

import styles from "./PostsList.module.scss"

const PostsList = ({posts, isInitialLoading, likePost, removePost, checkPost}) => {

    if (isInitialLoading) return <Loader/>
    let postComponents = posts.map(
        (post) => <Post
            key={post._id}
            post={post}
            likePost={likePost}
            removePost={removePost}
            checkPost={checkPost}
        />
    ).reverse()

    return (
        <div className={styles.container}>
            <div className={styles.posts_list}>
                {postComponents}
            </div>
            <div className={styles.right_bar}>
                <div className={"sticky"}>
                    Right Bar
                </div>
            </div>
        </div>
    )
}

export default connect(null)(PostsList)
