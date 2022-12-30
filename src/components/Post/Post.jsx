import React, {useEffect, useRef} from "react"
import {connect, useSelector} from "react-redux";
import {Link} from "react-router-dom";

import image_placeholder from "../../images/image-placeholder1.png"
import {ReactComponent as LikeEnabled} from "../../images/heart-fill.svg";
import {ReactComponent as LikeDisabled} from "../../images/heart.svg";
import {ReactComponent as ViewsIcon} from "../../images/eye-fill.svg";
import {DropdownMenu} from "../misc/DropdownMenu/DropdownMenu";
import Image from "../misc/Image/Image";
import {useOnScreen} from "../../hooks";

import styles from "./Post.module.scss"

const Post = ({post, likePost, removePost, checkPost}) => {
    const currentUserId = useSelector(state => state.auth.current_user?._id)
    const ref = useRef()
    const viewed = post.views?.includes(currentUserId)
    const liked = post.likes.includes(currentUserId)
    const like = () => likePost(post._id)
    const remove = () => removePost(post._id)

    const isVisible = useOnScreen(ref)
    useEffect(() => {
        if(isVisible && !viewed && post.author_id !== currentUserId) {
            console.log(post.views)
            checkPost(post._id)
        }
    }, [checkPost, isVisible, post, currentUserId])

    return (
        <div ref={ref} id={post._id} className={styles.post}>
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
                <div className={styles.post_footer}>
                    <div>
                        <button onClick={like}>{liked ? <LikeEnabled/> : <LikeDisabled/>}</button>
                        <div>{post.likes.length}</div>
                    </div>
                    <div>
                        <div><ViewsIcon/></div>
                        <div>{post.views ? post.views.length : 0}</div>
                    </div>

                </div>
            </div>
        </div>
    )
}

const mapStateToProps = () => ({})

export default connect(mapStateToProps)(Post)