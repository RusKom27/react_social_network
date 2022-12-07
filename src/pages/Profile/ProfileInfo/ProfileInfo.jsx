import React from "react"
import styles from "./ProfileInfo.module.scss"
import image_placeholder from "../../../images/image-placeholder1.png"
import user_image from "../../../images/user_image.jpg"
import {connect} from "react-redux";
import {Button} from "../../../components";
import {useNavigate, useParams} from "react-router-dom";
import {logoutUser} from "../../../redux/actions";

function ProfileInfo({current_user, logoutUser}) {
    const navigate = useNavigate()
    const user_login = useParams().login

    const logout = (event) => {
        logoutUser()
        navigate("/auth/login")
    }

    return (
        <div className={styles.container}>
            <div className={styles.profile_image}>
                <img src={image_placeholder} alt=""/>
            </div>
            <div className={styles.user_image}>
                <img src={user_image} alt=""/>
            </div>
            <div className={styles.profile}>
                <div className={styles.profile_info}>
                    <div className={styles.user_name}>
                        {current_user.name}
                    </div>
                    <div className={styles.user_description}>
                        @{current_user.login}
                    </div>
                </div>
                <div className={styles.profile_buttons}>
                    {user_login !== current_user.login ?
                        <>
                            <Button>Write message</Button>
                            <Button>Subscribe</Button>
                        </> :
                        <>
                            <Button onClick={logout}>Logout</Button>
                        </>
                    }
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    current_user: state.auth.current_user
})


export default connect(mapStateToProps, {logoutUser})(ProfileInfo)