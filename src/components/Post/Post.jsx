import React, {memo, useCallback} from "react"
import styles from "./Post.module.scss"
import image_placeholder from "../../images/image-placeholder1.png"
import user_image from "../../images/user_image.jpg"
import {ReactComponent as LikeEnabled} from "../../images/heart-fill.svg";
import {ReactComponent as LikeDisabled} from "../../images/heart.svg";
import {connect, useSelector} from "react-redux";
import {likePost, removePost} from "../../packages/api/rest/post";
import {updatePost, deletePost} from "../../redux/actions";
import {DropdownMenu} from "../misc/DropdownMenu/DropdownMenu";


const Post = memo(({post, updatePost, deletePost}) => {
    const currentUserId = useSelector(state => state.auth.token)
    const liked = post.likes.indexOf(currentUserId) > -1
    const like = useCallback(() => {
        likePost(post.id).then(post => {
            updatePost(post.data)
        })
    }, [post, updatePost])
    const remove = useCallback(() => {
        removePost(post.id).then(result => {
            deletePost(result.data._id)
        })
    }, [post, deletePost])

    return (
        <div id={post.id} className={styles.post}>
            <div>
                <img src={user_image} alt=""/>
            </div>
            <div>
                <div className={styles.post_header}>
                    <div className={styles.content_author}>
                        {post.user.name}
                    </div>
                    <DropdownMenu options={{"Delete": remove}}/>
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
                    <button onClick={like}>{liked ? <LikeEnabled/> : <LikeDisabled/>}</button>
                    Likes: {post.likes.length}
                </div>
            </div>
        </div>
    )
})

const mapStateToProps = state => ({})

export default connect(mapStateToProps, {updatePost, deletePost})(Post)