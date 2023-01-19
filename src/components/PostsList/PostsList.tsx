import React, {FC} from "react";

import {Post} from "./Post/Post";
import {Loader} from "../misc/Loader/Loader";
import {IPost} from "../../models";

import styles from "./PostsList.module.scss"

type PropsType = {
    posts: IPost[]
    isLoading: boolean
}

export const PostsList: FC<PropsType> = ({posts, isLoading}) => {
    if (isLoading) return <Loader/>
    let postComponents = posts.map(
        (post) => {
            return (
                <Post
                    key={post._id}
                    post={post}
                />
            )
        }
    ).reverse()

    return (
        <div className={styles.container}>
            {postComponents}
        </div>
    )
}
