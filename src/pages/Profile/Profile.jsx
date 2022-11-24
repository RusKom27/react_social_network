import React, {createRef} from "react"
import styles from "./Profile.module.scss"
import image_placeholder from "../../images/image-placeholder1.png"
import user_image from "../../images/user_image.jpg"
import {PostsListContainer} from "./PostsList/PostsListContainer";
import {PostCreationInputContainer} from "./PostCreationInput/PostCreationInputContainer";


function Profile() {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.profile_image}>
                    <img src={image_placeholder} alt=""/>
                </div>
                <div className={styles.user_image}>
                    <img src={user_image} alt=""/>
                </div>
                <div className={styles.user_name}>
                    User Name
                </div>
                <div className={styles.user_description}>
                    Description description description description description description description description
                    description description description description description description description description
                    description description description description description description description description
                </div>
                <PostCreationInputContainer/>
                <PostsListContainer/>
            </div>
        </div>

    )
}

export {Profile}