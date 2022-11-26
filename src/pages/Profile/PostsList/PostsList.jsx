import React from "react"
import styles from "./PostsList.module.scss"
import {Post} from "./Post/Post";
import axios from "axios";


function PostsList({posts}) {
    posts = posts.map((post, i) => <Post key={i} post={post}/>)

    const test_axios_local = () => {
        axios.get("http://localhost:3000").then(resp => console.log(resp.data))
    }
    const test_axios_deploy = () => {
        axios.get("https://nodejs-postgresql-ruskom27.vercel.app").then(resp => console.log(resp.data))
    }

    return (
        <div>
            <h2>Posts</h2>
            <button onClick={test_axios_local}>Test on local</button>
            <button onClick={test_axios_deploy}>Test on deploy</button>
            <hr/>
            <div className={styles.posts_list}>
                {posts}
            </div>
        </div>
    )
}

export {PostsList}