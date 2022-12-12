import React, {memo, useCallback} from "react"
import styles from "./Post.module.scss"
import image_placeholder from "../../images/image-placeholder1.png"
import user_image from "../../images/user_image.jpg"
import {ReactComponent as LikeEnabled} from "../../images/heart-fill.svg";
import {ReactComponent as LikeDisabled} from "../../images/heart.svg";
import {connect, useSelector} from "react-redux";
import {PostAPI} from "../../packages/api/rest/post";
import {deletePost, updatePost} from "../../redux/actions";
import {DropdownMenu} from "../misc/DropdownMenu/DropdownMenu";
import {Link} from "react-router-dom";


const Post = memo(({post, updatePost, deletePost}) => {
    const currentUserId = useSelector(state => state.auth.token)
    const liked = post.likes.indexOf(currentUserId) > -1
    const like = useCallback(() => {
        PostAPI.likePost(post._id).then(post => {
            updatePost(post.data)
        })
    }, [post, updatePost])
    const remove = useCallback(() => {
        PostAPI.removePost(post.id).then(result => {
            deletePost(result.data._id)
        })
    }, [post, deletePost])

    return (
        <div id={post._id} className={styles.post}>
            <div>
                <Link to={`../../profile/${post.user.login}`}>
                    <img src={user_image} alt=""/>
                </Link>
            </div>
            <div>
                <div className={styles.post_header}>
                    <div className={styles.content_author}>
                        <Link to={`../../profile/${post.user.login}`}>
                            {post.user.name} <span>@{post.user.login}</span>
                        </Link>
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
                    <div>Likes: {post.likes.length}</div>
                </div>
            </div>
        </div>
    )
})

const mapStateToProps = state => ({})

export default connect(mapStateToProps, {updatePost, deletePost})(Post)