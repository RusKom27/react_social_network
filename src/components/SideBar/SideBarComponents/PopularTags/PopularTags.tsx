import React from "react"
import {Loader} from "../../../misc/Loader/Loader";

import styles from "./PopularTags.module.scss"
import {postApi} from "../../../../redux/services";

export const PopularTags = () => {
    const {data: tags, isLoading} = postApi.useFetchPopularTagListQuery("")
    if (isLoading) return <Loader/>
    const tags_components = tags.map((tag: {tag: string, count: number}) => {
        return <div key={Object.entries(tag)[0][0]}>
            <span>#{Object.entries(tag)[0][0]}</span>
            <span>{Object.entries(tag)[0][1]}</span>
        </div>
    })

    return (
        <div className={styles.container}>
            <h3>Popular tags</h3>
            {tags_components}
        </div>
    )
}