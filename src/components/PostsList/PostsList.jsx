import React from "react"
import styles from "./PostsList.module.scss"
import Post from "../Post/Post";
import {Loader} from "../misc/Loader/Loader";
import {connect} from "react-redux";


const PostsList = ({posts}) => {
    if (!posts) return <Loader/>
    let postComponents = posts.map((post) => <Post key={post._id} post={post}/>).reverse()

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

export default connect(
    state => ({posts: state.posts.posts})
)(PostsList)
