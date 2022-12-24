import {useEffect} from "react";
import {connect, useSelector} from "react-redux";

import {PostsList} from "../../components";
import {getFeedPosts, likeFeedPost, removeFeedPost} from "../../redux/thunk";

import styles from "./Feed.module.scss"

function Feed({getFeedPosts, likeFeedPost, removeFeedPost}) {
    const {isInitialLoading, posts} = useSelector(state => state.feed)

    useEffect(() => {
        getFeedPosts()
    }, [])

    return (
        <div className={styles.container}>
            <PostsList
                posts={posts}
                isInitialLoading={isInitialLoading}
                likePost={likeFeedPost}
                removePost={removeFeedPost}
            />
        </div>
    )
}

const mapStateToProps = () => ({})

export default connect(
    mapStateToProps,
    {getFeedPosts, likeFeedPost, removeFeedPost}
)(Feed)
