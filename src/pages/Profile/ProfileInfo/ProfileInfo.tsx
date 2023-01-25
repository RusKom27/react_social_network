import React, {FC, useState} from "react"
import {useNavigate} from "react-router-dom";

import {Button, Loader, ModalWindow} from "../../../components";
import {createDialog, subscribeUser} from "../../../redux/thunk";
import {logoutUser} from "../../../redux/reducers/auth";
import {useImage} from "../../../hooks";

import styles from "./ProfileInfo.module.scss"
import IUser from "../../../models/IUser";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {userApi} from "../../../services";
import {Image} from "../../../components/misc/Image/Image";

type propsType = {
    user: IUser
}

export const ProfileInfo: FC<propsType> = ({user}) => {
    const navigate = useNavigate()
    const {data: current_user, isLoading} = userApi.useAuthUserByTokenQuery("")
    const dispatch = useAppDispatch()
    const [isLogoutWindowOpened, toggleLogoutWindow] = useState(false)

    if (isLoading) return <Loader />

    const isSubscribed = current_user && user.subscribers.includes(current_user._id)

    const logout = () => {
        dispatch(logoutUser(""))
        navigate("/auth/login")
    }

    const create_dialog = () => {
        dispatch(createDialog(user._id, dialog => navigate(`../../messages/${dialog.data._id}`)))
    }

    const subscribe = () => {
        dispatch(subscribeUser(user.login))
    }

    const to_account_settings = () => {
        navigate("/settings/account")
    }

    return (
        <div className={styles.container}>
            <div className={styles.profile_image}>
                <Image image_name={user.images.profile_image.small} />
            </div>
            <div className={styles.user_image}>
                <Image type={"avatar"} image_name={user.images.avatar_image.small} />
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
                            <Button onClick={() => toggleLogoutWindow(true)}>Logout</Button>
                            <Button onClick={to_account_settings}>Edit</Button>
                        </>
                    }
                </div>
            </div>
            {isLogoutWindowOpened &&
                <ModalWindow title={"Are you sure?"} closeWindow={() => toggleLogoutWindow(false)}>
                    <div>
                        <Button onClick={logout}>
                            Yes
                        </Button>
                        <Button onClick={() => toggleLogoutWindow(false)}>
                            Cancel
                        </Button>
                    </div>
                </ModalWindow>
            }
        </div>
    )
}