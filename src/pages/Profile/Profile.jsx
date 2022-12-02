import React from "react"
import styles from "./Profile.module.scss"
import {PostsListContainer} from "./PostsList/PostsListContainer";
import {PostCreationInputContainer} from "./PostCreationInput/PostCreationInputContainer";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";


function Profile() {
    return (
        <div className={styles.container}>
            <ProfileInfo/>
            <PostCreationInputContainer/>
            <PostsListContainer/>
        </div>
    )
}

export {Profile}