import React from "react"
import styles from "./PostsList.module.scss"
import Post from "../Post/Post";


export const PostsList = ({posts}) => {
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
