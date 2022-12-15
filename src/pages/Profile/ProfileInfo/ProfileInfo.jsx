import React, {useEffect} from "react"
import {connect, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

import {Button, Image, ImageLoader} from "../../../components";
import {logoutUser} from "../../../redux/actions";
import {createDialog, subscribeUser, updateUser} from "../../../redux/thunk";

import styles from "./ProfileInfo.module.scss"

function ProfileInfo({user, logoutUser, createDialog, subscribeUser, updateUser}) {
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
    useEffect(() => {
        console.log("draw")
    }, [user])
    const on_load = (image) => {
        console.log(image.data)
        updateUser({
            images: {
                avatar_image: {
                    big: image.data.name,
                    small: image.data.name
                }
            }
        })

    }

    return (
        <div className={styles.container}>
            <div className={styles.profile_image}>
                <img src={'http://localhost:3000/images/rocky.png'} alt=""/>
            </div>
            <div className={styles.user_image}>
                <Image image_name={user?.images?.avatar_image.small}/>
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
                            <ImageLoader onLoad={on_load} user_login={user.login}/>
                        </>
                    }
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({})

export default connect(
    mapStateToProps,
    {logoutUser, createDialog, subscribeUser, updateUser}
)(ProfileInfo)