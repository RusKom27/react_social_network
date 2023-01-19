import React, {FC, memo, useEffect, useRef, useState} from "react"
import {gsap} from "gsap"

import image_placeholder from "../../../static/images/image-placeholder1.png"
import {ReactComponent as LikeEnabled} from "../../../static/images/svg/heart-fill.svg";
import {ReactComponent as LikeDisabled} from "../../../static/images/svg/heart.svg";
import {ReactComponent as ViewsIcon} from "../../../static/images/svg/eye-fill.svg";
import {DropdownButton} from "../../misc/DropdownButton/DropdownButton";
import {ModalWindow} from "../../misc/ModalWindow/ModalWindow";
import {UserAvatarImage} from "./components/UserAvatarImage/UserAvatarImage";
import {UserPostInfo} from "./components/UserPostInfo/UserPostInfo";
import {postApi} from "../../../services";
import {UserCheckObserver} from "./components/UserCheckObserver/UserCheckObserver";
import {Button} from "../../misc/Button/Button";
import {useDate} from "../../../hooks";
import {SelectedTags} from "../../misc/SelectedTags/SelectedTags";
import {IPost} from "../../../models";
import {useAppSelector} from "../../../hooks/redux";

import styles from "./Post.module.scss"

type PropsType = {
    post: IPost
}

export const Post: FC<PropsType> = memo(({post}) => {
    const [isRemovePostWindowOpened, toggleRemovePostWindow] = useState(false)
    const current_user = useAppSelector(state => state.auth.current_user)
    const [likePost] = postApi.useLikePostMutation()
    const [removePost] = postApi.useRemovePostMutation()

    const isLiked = current_user && post.likes.includes(current_user._id)
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
                <div className={styles.right_side}>
                    <div className={styles.dropdown_section}>
                        <DropdownButton key={post._id} options={{
                            "Delete": () => toggleRemovePostWindow(true),
                            "Example": () => console.log("1"),
                            "Example1": () => console.log("2")
                        }}/>
                    </div>
                    <div className={styles.views_count}>
                        <div><ViewsIcon/></div>
                        <div>{post.views ? post.views.length : 0}</div>
                    </div>
                </div>
                <UserCheckObserver post={post}/>
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