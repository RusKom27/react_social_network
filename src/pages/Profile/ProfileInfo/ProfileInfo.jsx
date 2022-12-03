import React, {useEffect} from "react"
import styles from "./ProfileInfo.module.scss"
import image_placeholder from "../../../images/image-placeholder1.png"
import user_image from "../../../images/user_image.jpg"
import {connect} from "react-redux";

function ProfileInfo({current_user}) {
    return (
        <div className={styles.container}>
            <div className={styles.profile_image}>
                <img src={image_placeholder} alt=""/>
            </div>
            <div className={styles.user_image}>
                <img src={user_image} alt=""/>
            </div>
            <div className={styles.user_name}>
                {current_user.name}
            </div>
            <div className={styles.user_description}>
                @{current_user.login}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    current_user: state.auth.current_user
})


export default connect(mapStateToProps)(ProfileInfo)