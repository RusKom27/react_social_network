import React, {useEffect} from "react"
import styles from "./Post.module.scss"
import image_placeholder from "../../../../images/image-placeholder1.png"
import user_image from "../../../../images/user_image.jpg"
import {ReactComponent as LikeEnabled} from "../../../../images/heart-fill.svg";
import {ReactComponent as LikeDisabled} from "../../../../images/heart.svg";
import {connect, useSelector} from "react-redux";
import {likePost} from "../../../../packages/api/rest/post";
import {updatePost} from "../../../../redux/actions";


function Post({post, updatePost}) {
    const currentUserId = useSelector(state => state.auth.token)
    const liked = post.likes.indexOf(currentUserId) > -1

    const like = () => {
        likePost(post.id).then(post => {
            updatePost(post.data)
        })
    }

    return (
        <div id={post.id} className={styles.post}>
            <div>
                <img src={user_image} alt=""/>
            </div>
            <div>
                <div className={styles.content_author}>
                    {post.user.name}
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
                    <button onClick={like}>{liked ? <LikeEnabled/> : <LikeDisabled/>}</button>Likes: {post.likes.length}
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({})

export default connect(mapStateToProps, {updatePost})(Post)