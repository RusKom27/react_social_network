import React from "react"

import {Loader} from "../../../misc/Loader/Loader";

import styles from "./ActualTopics.module.scss"
import {postApi} from "../../../../services";

export const ActualTopics = () => {
    const {data: topics, isLoading} = postApi.useFetchActualTopicListQuery("")
    if (isLoading) return <Loader/>
    const topics_components = topics.map((topic: {topic: string, count: number}) => {
        return <div key={Object.entries(topic)[0][0]}>
            <span>{Object.entries(topic)[0][0]}</span>
            <span>{Object.entries(topic)[0][1]}</span>
        </div>
    })

    return (
        <div className={styles.container}>
            <h3>Actual topics</h3>
            {topics_components}
        </div>
    )
}