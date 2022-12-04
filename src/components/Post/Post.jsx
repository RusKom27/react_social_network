import React, {useEffect, useState} from "react"
import styles from "./Post.module.scss"
import image_placeholder from "../../images/image-placeholder1.png"
import user_image from "../../images/user_image.jpg"
import {ReactComponent as LikeEnabled} from "../../images/heart-fill.svg";
import {ReactComponent as LikeDisabled} from "../../images/heart.svg";
import {ReactComponent as ThreeDots} from "../../images/three-dots.svg";
import {connect, useSelector} from "react-redux";
import {likePost, removePost} from "../../packages/api/rest/post";
import {updatePost, deletePost} from "../../redux/actions";


function Post({post, updatePost, deletePost}) {
    const currentUserId = useSelector(state => state.auth.token)
    const liked = post.likes.indexOf(currentUserId) > -1
    const [isDropdownOpened, toggleDropdown] = useState(false)

    const like = () => {
        likePost(post.id).then(post => {
            console.log(post.data)
            updatePost(post.data)
        })
    }
    const remove = () => {
        removePost(post.id).then(result => {
            deletePost(result.data._id)
        })
    }
    useEffect(() => {
        const isClickOutOfDropdown = event => {
            if(!event.target.parentElement.classList.contains(styles.post_dropdown) &&
                isDropdownOpened &&
                (event.target.tagName !== "BUTTON" && event.target.tagName !== "svg" && event.target.tagName !== "path"))
                toggleDropdown(false)
        }
        window.addEventListener('click', isClickOutOfDropdown)
        return () => {
            window.removeEventListener('click', isClickOutOfDropdown)
        }
    })


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
                    <div>
                        <button onClick={() => toggleDropdown(!isDropdownOpened)}>
                            <ThreeDots/>
                        </button>
                        {isDropdownOpened &&
                            <div className={styles.post_dropdown}>
                                <div onClick={remove}>Delete</div>
                            </div>
                        }
                    </div>

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
}

const mapStateToProps = state => ({})

export default connect(mapStateToProps, {updatePost, deletePost})(Post)