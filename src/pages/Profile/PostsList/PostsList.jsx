import React from "react"
import styles from "./PostsList.module.scss"
import {Post} from "./Post/Post";


function PostsList({posts}) {

    posts = posts.map((post, i) => <Post key={i} post={post}/>)

    return (
        <div>
            <h2>Posts</h2>
            <hr/>
            <div className={styles.posts_list}>
                {posts}
            </div>
        </div>
    )
}

export {PostsList}