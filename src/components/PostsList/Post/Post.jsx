import React, {memo, useEffect, useRef, useState} from "react"
import {useSelector} from "react-redux";
import {gsap} from "gsap"

import image_placeholder from "../../../static/images/image-placeholder1.png"
import {ReactComponent as LikeEnabled} from "../../../static/images/svg/heart-fill.svg";
import {ReactComponent as LikeDisabled} from "../../../static/images/svg/heart.svg";
import {ReactComponent as ViewsIcon} from "../../../static/images/svg/eye-fill.svg";
import {DropdownMenu} from "../../misc/DropdownMenu/DropdownMenu";
import {ModalWindow} from "../../misc/ModalWindow/ModalWindow";
import {UserAvatarImage} from "./components/UserAvatarImage/UserAvatarImage";
import {UserPostInfo} from "./components/UserPostInfo/UserPostInfo";
import {postApi} from "../../../services";
import {UserCheckObserver} from "./components/UserCheckObserver/UserCheckObserver";
import {Button} from "../../misc/Button/Button";
import {useDate} from "../../../hooks";

import styles from "./Post.module.scss"
import {SelectedTags} from "../../misc/SelectedTags/SelectedTags";

export const Post = memo(({post}) => {
    const [isRemovePostWindowOpened, toggleRemovePostWindow] = useState(false)
    const current_user = useSelector(state => state.auth.current_user)
    const [likePost] = postApi.useLikePostMutation()
    const [removePost] = postApi.useRemovePostMutation()

    const isLiked = post.likes.includes(current_user._id)
    const like = () => likePost(post._id)
    const remove = () => removePost(post._id)

    const ref = useRef(null)
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

    const creation_date = useDate(post?.creation_date, true)
    return (
        <>
            <div ref={ref} id={post._id} className={styles.post}>
                <UserAvatarImage user_id={post.author_id}/>
                <div>
                    <div className={styles.post_header}>
                        <UserPostInfo user_id={post.author_id}/>
                        <div>
                            <span> | {creation_date}</span>
                        </div>
                    </div>
                    <div>
                        {post.image &&
                            <div className={styles.content_image}>
                                <img src={image_placeholder} alt=""/>
                            </div>
                        }
                        <div className={styles.post_main}>
                            <SelectedTags text={post.text} tags={ post.tags ? post.tags : []}/>
                        </div>
                        <div className={styles.post_footer}>
                            <div>
                                <button onClick={like}>{isLiked ? <LikeEnabled/> : <LikeDisabled/>}</button>
                                <div>{post.likes.length}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <DropdownMenu options={{"Delete": () => toggleRemovePostWindow(true)}}/>
                    </div>
                    <div>
                        <div><ViewsIcon/></div>
                        <div>{post.views ? post.views.length : 0}</div>
                    </div>
                </div>
                <UserCheckObserver post={post} current_user={current_user}/>
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
        </>
    )
})