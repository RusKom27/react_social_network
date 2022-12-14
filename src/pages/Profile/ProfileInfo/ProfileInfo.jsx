import {useState} from "react"
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

import {Button, ModalWindow} from "../../../components";
import {createDialog, subscribeUser} from "../../../redux/thunk";
import {logoutUser} from "../../../redux/reducers/auth";
import {useImage} from "../../../hooks";

import styles from "./ProfileInfo.module.scss"

export const ProfileInfo = ({user}) => {
    const navigate = useNavigate()
    const current_user = useSelector(state => state.auth.current_user)
    const dispatch = useDispatch()
    const avatar_image = useImage(user.images.avatar_image.small)
    const profile_image = useImage(user.images.profile_image.small)
    const [isLogoutWindowOpened, toggleLogoutWindow] = useState(false)

    const isSubscribed = user?.subscribers.includes(current_user?._id)

    const logout = () => {
        dispatch(logoutUser())
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
                {profile_image.src && <img src={profile_image.src} alt=""/>}
            </div>
            <div className={styles.user_image}>
                {avatar_image.src && <img src={avatar_image.src} alt=""/>}
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