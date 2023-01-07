import React from "react"
import {connect} from "react-redux";
import {Loader} from "../../../misc/Loader/Loader";

import styles from "./PopularTags.module.scss"

function PopularTags({tags}) {
    if (!tags) return <Loader/>
    const tags_components = tags.map((tag) => {
        return <div key={Object.entries(tag)[0][0]}>
            <span>{Object.entries(tag)[0][0]}</span>
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

export default connect()(PopularTags)