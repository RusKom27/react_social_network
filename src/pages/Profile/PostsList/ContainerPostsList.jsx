import React from "react"
import styles from "./PostsList.module.scss"
import {Post} from "./Post/Post";
import {PostsList} from "./PostsList";


function ContainerPostsList({store}) {
    const state = store.getState()

    const posts = state.profile.posts

    return <PostsList posts={posts} />
}

export {ContainerPostsList}