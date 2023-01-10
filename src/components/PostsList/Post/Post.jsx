import React, {useState, useEffect, memo} from "react"
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {gsap} from "gsap"

import image_placeholder from "../../../static/images/image-placeholder1.png"
import {ReactComponent as LikeEnabled} from "../../../static/images/svg/heart-fill.svg";
import {ReactComponent as LikeDisabled} from "../../../static/images/svg/heart.svg";
import {ReactComponent as ViewsIcon} from "../../../static/images/svg/eye-fill.svg";
import {DropdownMenu} from "../../misc/DropdownMenu/DropdownMenu";
import {ModalWindow} from "../../misc/ModalWindow/ModalWindow";
import {useImage, useOnScreen} from "../../../hooks";
import {Button} from "../../misc/Button/Button";
import {useTags} from "../../../hooks/useTags";

import styles from "./Post.module.scss"

export const Post = memo(({post, likePost, removePost, checkPost}) => {
    const currentUserId = useSelector(state => state.auth.current_user?._id)
    const dispatch = useDispatch()
    const [isVisible, ref] = useOnScreen()
    const image = useImage(post.user.images.avatar_image.small)
    const [isRemovePostWindowOpened, toggleRemovePostWindow] = useState(false)
    const textWithTags = useTags(post.text, post.tags ? post.tags : [])

    const isViewed = post.views?.includes(currentUserId)
    const isLiked = post.likes.includes(currentUserId)
    const like = () => dispatch(likePost(post._id))
    const remove = () => dispatch(removePost(post._id))

    useEffect(() => {
        if(isVisible && !isViewed && post.author_id !== currentUserId) {
            dispatch(checkPost(post._id))
        }
    }, [isVisible, post, currentUserId])

    useEffect(() => {
        gsap.to(
            ref.current,
            {
                opacity: 1,
                duration: 0.5,
                y: 0
            }
        )
    })

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
})