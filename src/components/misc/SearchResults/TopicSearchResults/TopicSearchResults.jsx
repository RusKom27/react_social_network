import React from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

import {TopicResult} from "./TopicResult/TopicResult";

import styles from "./TopicSearchResults.module.scss"

export const TopicSearchResults = ({limit}) => {
    const {topics} = useSelector(state => state.search.results)
    const topics_components = topics.slice(0, limit).map((topic, i) =>
        <TopicResult key={i} topic={topic}/>
    )

    return (
        <div className={styles.container}>
            {topics_components}
            {topics.length > limit && <div><Link to={'/search_results/topics'}>Show more...</Link></div>}
            {topics.length < 1 && <div>Not found</div>}
        </div>

    )
}