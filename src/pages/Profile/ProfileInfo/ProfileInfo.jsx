import React from "react"
import styles from "./ProfileInfo.module.scss"
import image_placeholder from "../../../images/image-placeholder1.png"
import user_image from "../../../images/user_image.jpg"
import {connect, useSelector} from "react-redux";
import {Button} from "../../../components";
import {useNavigate} from "react-router-dom";
import {logoutUser} from "../../../redux/actions";
import {createDialog} from "../../../redux/thunk/dialog";

function ProfileInfo({user, logoutUser, createDialog}) {
    const navigate = useNavigate()
    const current_user = useSelector(state => state.auth.current_user)

    const logout = () => {
        logoutUser()
        navigate("/auth/login")
    }

    const create_dialog = () => {
        createDialog(user?._id, dialog => navigate(`../../messages/${dialog.data._id}`))
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
                        {user?.name}
                    </div>
                    <div className={styles.user_description}>
                        @{user?.login}
                    </div>
                </div>
                <div className={styles.profile_buttons}>
                    {current_user?.login !== user?.login ?
                        <>
                            <Button onClick={create_dialog}>Write message</Button>
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
})


export default connect(mapStateToProps, {logoutUser, createDialog})(ProfileInfo)