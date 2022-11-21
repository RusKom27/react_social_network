import React, {createRef} from "react"
import styles from "./Profile.module.scss"
import image_placeholder from "../../images/image-placeholder1.png"
import user_image from "../../images/user_image.jpg"
import {PostsList} from "./PostsList/PostsList";
import {ACTION} from "../../redux/state";


function Profile(props) {
    const text_area = createRef();
    const addPostHandle = event => {
        event.preventDefault()
        props.dispatch({type: ACTION.ADD_POST})
        text_area.current.focus()
    }

    return (
        <div>
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
                    Description description description description description description description description
                    description description description description description description description description
                    description description description description description description description description
                </div>
                <div className={styles.post_creating_form}>
                    <hr/>
                    <form>
                    <textarea
                        onChange={event => props.dispatch({
                                type: ACTION.UPDATE_POST_INPUT,
                                post_text: event.target.value
                            }
                        )}
                        ref={text_area}
                        name={"post_text"}
                        value={props.profile.postInput}
                    />
                        <input onClick={addPostHandle} type={"submit"} value={"Send"}/>
                    </form>

                </div>
                <PostsList posts={props.profile.posts}/>
            </div>
        </div>

    )
}

export {Profile}