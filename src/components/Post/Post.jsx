import React from "react"
import styles from "./Post.module.scss"
import image_placeholder from "../../images/image-placeholder1.png"
import {ReactComponent as LikeEnabled} from "../../images/heart-fill.svg";
import {ReactComponent as LikeDisabled} from "../../images/heart.svg";
import {connect, useSelector} from "react-redux";
import {DropdownMenu} from "../misc/DropdownMenu/DropdownMenu";
import {Link} from "react-router-dom";
import {likePost, removePost} from "../../redux/thunk";
import Image from "../misc/Image/Image";


const Post = ({post, likePost, removePost}) => {
    const currentUserId = useSelector(state => state.auth.token)
    const liked = post.likes.indexOf(currentUserId) > -1
    const like = () => likePost(post._id)
    const remove = () => removePost(post._id)

    return (
        <div id={post._id} className={styles.post}>
            <div>
                <Link to={`../../profile/${post.user.login}`}>
                    <Image image_name={post.user.images.avatar_image.small}/>
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
                    <div>{post.likes.length}</div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({})

export default connect(mapStateToProps, {likePost, removePost})(Post)