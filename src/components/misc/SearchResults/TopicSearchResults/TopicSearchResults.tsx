import React, {FC} from "react";
import {Link} from "react-router-dom";

import {TopicResult} from "./TopicResult/TopicResult";
import {useAppSelector} from "../../../../hooks/redux";

import styles from "./TopicSearchResults.module.scss"

type PropsType = {
    limit?: number,
}

export const TopicSearchResults: FC<PropsType> = ({limit}) => {
    const {topics} = useAppSelector(state => state.search.results)
    const topics_components = topics.slice(0, limit).map((topic, i) =>
        <TopicResult key={i} topic={topic}/>
    )

    return (
        <div className={styles.container}>
            {topics_components}
            {limit && topics.length > limit && <div><Link to={'/search_results/topics'}>Show more...</Link></div>}
            {topics.length < 1 && <div>Not found</div>}
        </div>

    )
}