import {PostsList, SideBar} from "../../components";
import {PopularTags} from "../../components/SideBar/SideBarComponents";
import {ActualTopics} from "../../components/SideBar/SideBarComponents/ActualTopics/ActualTopics";
import {postApi} from "../../services";

import styles from "./Feed.module.scss"

export const Feed = () => {
    const {data: posts, isLoading} = postApi.useFetchAllPostListQuery()

    return (
        <div className={styles.container}>
            <div className={styles.posts_container}>
                <PostsList
                    posts={posts}
                    isLoading={isLoading}
                />
                <SideBar>
                    <div>
                        <PopularTags/>
                    </div>
                    <div>
                        <ActualTopics/>
                    </div>
                </SideBar>
            </div>

        </div>
    )
}
