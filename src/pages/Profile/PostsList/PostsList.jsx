import React from "react"
import styles from "./PostsList.module.scss"
import {Post} from "./Post/Post";
import axios from "axios";


function PostsList({posts}) {
    posts = posts.map((post, i) => <Post key={i} post={post}/>)

    const test_axios = () => {
        axios.get("https://nodejs-postgresql-lyart.vercel.app").then(resp => console.log(resp.data))
    }

    return (
        <div>
            <h2>Posts</h2>
            <button onClick={test_axios}>Test</button>
            <hr/>
            <div className={styles.posts_list}>
                {posts}
            </div>
        </div>
    )
}

export {PostsList}