import React from "react"
import styles from "./PostsList.module.scss"
import {Post} from "./Post/Post";
import axios from "axios";


function PostsList({posts}) {
    posts = posts.map((post, i) => <Post key={i} post={post}/>)

    const get_axios_local = () => {
        axios.get("http://localhost:3000").then(resp => console.log(resp.data))
    }
    const post_axios_local = () => {
        axios.post(
            "http://localhost:3000/quotes",
            {
                quote: "tessdfswedwt" + Date.now(),
                author: "teeferdwest" + Date.now(),
            })
        .then(data => console.log(data.data))
    }
    const get_axios_deploy = () => {
        axios.get("https://nodejs-pg.vercel.app/quotes?page=8").then(resp => console.log(resp.data))
    }
    const post_axios_deploy = () => {
        axios.post(
            "https://nodejs-pg.vercel.app/quotes",
            {
                quote: "tessdfswedwt" + Date.now(),
                author: "teeferdwest" + Date.now()
            })
            .then(data => console.log(data.data))
    }

    return (
        <div>
            <h2>Posts</h2>
            <button onClick={get_axios_local}>Get on local</button>
            <button onClick={post_axios_local}>Post on local</button>
            <button onClick={get_axios_deploy}>Get on deploy</button>
            <button onClick={post_axios_deploy}>Post on deploy</button>
            <hr/>
            <div className={styles.posts_list}>
                {posts}
            </div>
        </div>
    )
}

export {PostsList}