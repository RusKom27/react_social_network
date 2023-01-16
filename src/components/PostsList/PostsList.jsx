import {Post} from "./Post/Post";
import {Loader} from "../misc/Loader/Loader";

import styles from "./PostsList.module.scss"

export const PostsList = ({posts, isLoading}) => {
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
