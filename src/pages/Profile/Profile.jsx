import styles from "./Profile.module.scss"
import image_placeholder from "../../images/image-placeholder1.png"
import user_image from "../../images/user_image.jpg"


function Profile() {

    const handleSubmit = event => {
        event.preventDefault()
        console.log(event.target.post_text.value)
        event.target.post_text.value = ''
        event.target.post_text.focus()
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
                <form onSubmit={handleSubmit}>
                    <textarea name={"post_text"}/>
                    <input type={"submit"} value={"Send"}/>

                </form>
            </div>
            <div>
                <h2>Posts</h2>
                <hr/>
                <div className={styles.posts_list}>
                    <div className={styles.post}>
                        <div className={styles.content_author}>
                            Author Nick
                        </div>
                        <div className={styles.content_image}>
                            <img src={image_placeholder} alt=""/>
                        </div>
                        <div>
                            Post description post description  post description  post description  post description  post description  post description
                        </div>
                        <div>
                            Likes: 12 Dislikes: 1
                        </div>
                        <hr/>
                    </div>
                    <div className={styles.post}>
                        <div className={styles.content_author}>
                            Author Nick
                        </div>
                        <div>
                            Post description post description  post description  post description  post description  post description  post description
                        </div>
                        <div>
                            Likes: 1 Dislikes: 12
                        </div>
                        <hr/>
                    </div>

                </div>
            </div>

        </div>
    )
}

export {Profile}