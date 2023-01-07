import {useEffect} from "react";
import {connect, useSelector} from "react-redux";

import {PostsList, SideBar} from "../../components";
import {checkFeedPost, getFeedPosts, getPopularTags, likeFeedPost, removeFeedPost} from "../../redux/thunk";

import styles from "./Feed.module.scss"
import {PopularTags} from "../../components/SideBar/SideBarComponents";

const Feed = ({getFeedPosts, getPopularTags, likeFeedPost, removeFeedPost, checkFeedPost}) => {
    const {isInitialLoading, posts, popular_tags} = useSelector(state => state.feed)

    useEffect(() => {
        getPopularTags()
        getFeedPosts()
    },[])

    return (
        <div className={styles.container}>
            <div className={styles.posts_container}>
                <PostsList
                    posts={posts}
                    isInitialLoading={isInitialLoading}
                    likePost={likeFeedPost}
                    removePost={removeFeedPost}
                    checkPost={checkFeedPost}
                />
                <SideBar>
                    <PopularTags tags={popular_tags}/>
                </SideBar>
            </div>

        </div>
    )
}

const mapStateToProps = () => ({})

export default connect(
    mapStateToProps,
    {
        getFeedPosts,
        likeFeedPost,
        removeFeedPost,
        checkFeedPost,
        getPopularTags
    }
)(Feed)
