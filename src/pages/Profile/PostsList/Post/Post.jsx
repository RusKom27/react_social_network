import React from "react"
import styles from "./Post.module.scss"
import image_placeholder from "../../../../images/image-placeholder1.png"
import user_image from "../../../../images/user_image.jpg"
import {ReactComponent as LikeEnabled} from "../../../../images/heart-fill.svg";
import {ReactComponent as LikeDisabled} from "../../../../images/heart.svg";


function Post({post}) {
    return (
        <div className={styles.post}>
            <div>
                <img src={user_image} alt=""/>
            </div>
            <div>
                <div className={styles.content_author}>
                    {post.username}
                </div>

                {post.image &&
                    <div className={styles.content_image}>
                        <img src={image_placeholder} alt=""/>
                    </div>
                }
                <div>
                    {post.text}
                </div>
                <div className={styles.like_section}>
                    <div>{false ? <LikeEnabled/> : <LikeDisabled/>}</div>Likes: {post.likes}
                </div>
            </div>
        </div>
    )
}

export {Post}