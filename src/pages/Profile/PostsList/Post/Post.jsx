import React from "react"
import styles from "./Post.module.scss"
import image_placeholder from "../../../../images/image-placeholder1.png"


function Post(props) {
    return (
        <div className={styles.post}>
            <div className={styles.content_author}>
                {props.post.username}
            </div>

            <div className={styles.content_image}>
                {props.post.image ? <img src={image_placeholder} alt=""/> : ""}
            </div>
            <div>
                {props.post.text}
            </div>
            <div>
                Likes: {props.post.likes} Dislikes: {props.post.dislikes}
            </div>
            <hr/>
        </div>
    )
}

export {Post}