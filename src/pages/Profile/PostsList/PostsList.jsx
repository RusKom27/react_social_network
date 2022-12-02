import React from "react"
import styles from "./PostsList.module.scss"
import {Post} from "./Post/Post";
import {message} from "../../../packages/api";
import {user} from "../../../packages/api";
import axios from "axios";


function PostsList({posts}) {
    posts = posts.map((post, i) => <Post key={i} post={post}/>)

    const get_messages = () => {
        message.getMessages().then(resp => console.log(resp.data))
    }
    const get_users = () => {
        user.getUsers().then(resp => console.log(resp.data))
    }
    const create_message = () => {
        message.createMessage(
            {
                text: "test"
            })
            .then(data => console.log(data.data))
    }

    const create_message_axios = () => {
        //https://social-network-server-rho.vercel.app/api/message
        axios.post("https://localhost:3000/api/message", {
            sender_id: "63839b940f668cd883a69dd6",
            receiver_id: "63837b05aca2b4ac81b8ed1f",
            text: "test_message",
        }).then(data => console.log(data.data))
    }

    return (
        <div>
            <h2>Posts</h2>
            <button onClick={get_messages}>Get messages</button>
            <button onClick={create_message}>Create message</button>
            <button onClick={create_message_axios}>Create message axios</button>
            <button onClick={get_users}>Get users</button>
            <hr/>
            <div className={styles.posts_list}>
                {posts}
            </div>
        </div>
    )
}

export {PostsList}