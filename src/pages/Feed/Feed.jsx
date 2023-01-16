import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {PostsList, SideBar} from "../../components";
import {
    checkFeedPost,
    getActualTopics,
    getFeedPosts,
    getPopularTags,
    likeFeedPost,
    removeFeedPost
} from "../../redux/thunk";

import styles from "./Feed.module.scss"
import {PopularTags} from "../../components/SideBar/SideBarComponents";
import {ActualTopics} from "../../components/SideBar/SideBarComponents/ActualTopics/ActualTopics";
import {postApi} from "../../services";

export const Feed = () => {
    // const {isInitialLoading, posts, popular_tags, actual_topics} = useSelector(state => state.feed)
    const {data: posts, isLoading} = postApi.useFetchAllPostListQuery()
    const dispatch = useDispatch()

    useEffect(() => {
        // dispatch(getPopularTags())
        // dispatch(getActualTopics())
        // dispatch(getFeedPosts())
    },[])

    return (
        <div className={styles.container}>
            <div className={styles.posts_container}>
                <PostsList
                    posts={posts}
                    isLoading={isLoading}
                />
                <SideBar>
                    <div>
                        {/*<PopularTags tags={popular_tags}/>*/}
                    </div>
                    <div>
                        {/*<ActualTopics topics={actual_topics}/>*/}
                    </div>
                </SideBar>
            </div>

        </div>
    )
}
