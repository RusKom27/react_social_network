import React from "react"
import {connect, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

import {Button} from "../../../components";
import {logoutUser} from "../../../redux/actions";
import {createDialog, subscribeUser} from "../../../redux/thunk";

import styles from "./ProfileInfo.module.scss"
import {ImageAPI} from "../../../packages/api/rest/image";

function ProfileInfo({user, logoutUser, createDialog, subscribeUser}) {
    const navigate = useNavigate()
    const current_user = useSelector(state => state.auth.current_user)
    const isSubscribed = user?.subscribers.includes(current_user?._id)

    const logout = () => {
        logoutUser()
        navigate("/auth/login")
    }

    const create_dialog = () => {
        createDialog(user?._id, dialog => navigate(`../../messages/${dialog.data._id}`))
    }

    const subscribe = () => {
        subscribeUser(user.login)
    }

    const send_image = (event) => {
        event.preventDefault()
        let formData = new FormData();
        let imageFile = event.target['image'];
        console.log(imageFile.files[0]);
        const fileType = imageFile.files[0].name.split('.').at(-1)
        const fileName = `${current_user.login}_avatar.${fileType}`
        formData.append("image", imageFile.files[0], fileName);
        ImageAPI.sendImage(formData)
    }

    return (
        <div className={styles.container}>
            <div className={styles.profile_image}>
                <img src={'http://localhost:3000/images/rocky.png'} alt=""/>
            </div>
            <div className={styles.user_image}>
                <img src={`https://social-network-server-rho.vercel.app/images/${user.images?.avatar_image.small}`} alt=""/>
            </div>
            <div className={styles.profile}>
                <div className={styles.profile_info}>
                    <div className={styles.user_name}>
                        {user?.name}
                    </div>
                    <div className={styles.user_description}>
                        @{user?.login}
                    </div>
                    <div>
                        subscribers: {user?.subscribers.length}
                    </div>
                    <div>
                        <form onSubmit={send_image}>
                            <input name={"image"} type="file"/>
                            <Button type={"submit"}>Send</Button>
                        </form>
                    </div>
                </div>
                <div className={styles.profile_buttons}>
                    {current_user?.login !== user?.login ?
                        <>
                            <Button onClick={create_dialog}>Write message</Button>
                            <Button
                                style={isSubscribed && styles.subscribed}
                                onClick={subscribe}>
                                {isSubscribed ? 'Unsubscribe' : 'Subscribe'}
                            </Button>
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


export default connect(mapStateToProps, {logoutUser, createDialog, subscribeUser})(ProfileInfo)