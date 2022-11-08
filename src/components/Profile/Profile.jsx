import styles from "./Profile.module.scss"
import image_placeholder from "../../images/image-placeholder1.png"
import user_image from "../../images/user_image.jpg"

function Profile() {
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
            <div>
                Description description description description description description description description description description description description description description description description description description description description description description description description
            </div>
            <div>
                <form method={"GET"} name={"create_post"} action="">
                    <textarea name={"post_text"}/>
                    <input type={"submit"} value={"Send"}/>
                </form>
            </div>
        </div>
    )
}

export {Profile}