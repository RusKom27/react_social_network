import React, {useState, useEffect, useRef, memo} from "react"
import {connect, useSelector} from "react-redux";
import {Link} from "react-router-dom";

import image_placeholder from "../../images/image-placeholder1.png"
import {ReactComponent as LikeEnabled} from "../../images/heart-fill.svg";
import {ReactComponent as LikeDisabled} from "../../images/heart.svg";
import {ReactComponent as ViewsIcon} from "../../images/eye-fill.svg";
import {DropdownMenu} from "../misc/DropdownMenu/DropdownMenu";
import {getImage} from "../../redux/thunk";
import {ModalWindow} from "../misc/ModalWindow/ModalWindow";
import {useImage, useOnScreen} from "../../hooks";

import styles from "./Post.module.scss"
import {Button} from "../misc/Button/Button";
import {useTags} from "../../hooks/useTags";

const Post = ({post, likePost, removePost, checkPost, getImage}) => {
    const currentUserId = useSelector(state => state.auth.current_user?._id)
    const ref = useRef()
    const image = useImage(post.user.images.avatar_image.small, getImage)
    const [isRemovePostWindowOpened, toggleRemovePostWindow] = useState(false)

    const textWithTags = useTags(post.text, post.tags ? post.tags : [])
    const isViewed = post.views?.includes(currentUserId)
    const isLiked = post.likes.includes(currentUserId)
    const like = () => likePost(post._id)
    const remove = () => removePost(post._id)

    const isVisible = useOnScreen(ref)

    useEffect(() => {
        if(isVisible && !isViewed && post.author_id !== currentUserId) {
            checkPost(post._id)
        }
    }, [isVisible, post, currentUserId])

    return (

        <div ref={ref} id={post._id} className={styles.post}>
            <div>
                <Link to={`../../profile/${post.user.login}`}>
                    {image.src && <img src={image.src} alt=""/>}
                </Link>
            </div>
            <div>
                <div className={styles.post_header}>
                    <div className={styles.content_author}>
                        <Link to={`../../profile/${post.user.login}`}>
                            {post.user.name} <span>@{post.user.login}</span>
                        </Link>
                    </div>
                    <DropdownMenu options={{"Delete": () => toggleRemovePostWindow(true)}}/>
                </div>

                {post.image &&
                    <div className={styles.content_image}>
                        <img src={image_placeholder} alt=""/>
                    </div>
                }
                <div className={styles.post_main}>
                    {textWithTags}
                </div>
                <div className={styles.post_footer}>
                    <div>
                        <button onClick={like}>{isLiked ? <LikeEnabled/> : <LikeDisabled/>}</button>
                        <div>{post.likes.length}</div>
                    </div>
                    <div>
                        <div><ViewsIcon/></div>
                        <div>{post.views ? post.views.length : 0}</div>
                    </div>

                </div>
            </div>
            {isRemovePostWindowOpened &&
                <ModalWindow title={"Are you sure?"} closeWindow={() => toggleRemovePostWindow(false)}>
                    <div>
                        <Button onClick={remove}>
                            Yes
                        </Button>
                        <Button onClick={() => toggleRemovePostWindow(false)}>
                            Cancel
                        </Button>
                    </div>
                </ModalWindow>
            }
        </div>
    )
}

const mapStateToProps = () => ({})

export default connect(mapStateToProps, {getImage})(Post)