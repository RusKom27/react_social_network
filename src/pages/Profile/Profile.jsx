import React from "react"
import styles from "./Profile.module.scss"
import image_placeholder from "../../images/image-placeholder1.png"
import user_image from "../../images/user_image.jpg"
import {PostsList} from "./PostsList/PostsList";
import {createRef} from "react";


function Profile(props) {
    const text_area = createRef();
    const addPostHandle = event => {
        event.preventDefault()
        const post_message = text_area.current.value
        props.profile.addPost(post_message)
        text_area.current.value = ''
        text_area.current.focus()
    }

    return (
        <div className={styles.container}>
            <div className={styles.profile_image}>
                <img src={image_placeholder} alt=""/>
            </div>
            <div className={styles.user_image}>
                <img src={user_image} alt=""/>
            </div>
            <div className={styles.user_name}>
                User Name
            </div>
            <div className={styles.user_description}>
                Description description description description description description description description description description description description description description description description description description description description description description description description
            </div>
            <div className={styles.post_creating_form}>
                <hr/>
                <div>
                    <textarea ref={text_area} name={"post_text"}/>
                    <input onClick={addPostHandle} type={"submit"} value={"Send"}/>
                </div>

            </div>
            <PostsList posts={props.profile.posts}/>
        </div>
    )
}

export {Profile}