import React from "react"
import styles from "./PostsList.module.scss"
import Post from "../Post/Post";
import {Loader} from "../misc/Loader/Loader";
import {connect, useSelector} from "react-redux";


const PostsList = ({posts, isInitialLoading, likePost, removePost}) => {
    // const {isInitialLoading, posts} = useSelector(state => state.posts)

    if (isInitialLoading) return <Loader/>
    let postComponents = posts.map(
        (post) => <Post
            key={post._id}
            post={post}
            likePost={likePost}
            removePost={removePost}
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

export default connect(() => ({}))(PostsList)
