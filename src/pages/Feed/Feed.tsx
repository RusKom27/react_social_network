import React from "react";
import {Loader, PostsList, SideBar} from "../../components";
import {PopularTags, ActualTopics} from "../../components/SideBar/SideBarComponents";
import {postApi} from "../../redux/services";

import styles from "./Feed.module.scss"

export const Feed = () => {
    const {data: posts, isLoading} = postApi.useFetchAllPostListQuery("")

    if (isLoading || !posts) return  <div className={styles.container}><Loader /></div>

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
