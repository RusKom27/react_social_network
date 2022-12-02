import React from "react"
import styles from "./ProfileInfo.module.scss"
import image_placeholder from "../../../images/image-placeholder1.png"
import user_image from "../../../images/user_image.jpg"

function ProfileInfo() {
    return (
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
        </div>
    )
}

export {ProfileInfo}