import {connect, useSelector} from "react-redux";
import {useState} from "react";

import {Loader, ModalWindow} from "../../../components";
import {
    updateCurrentUser,
    getImage,
    sendImage,
    updateUserProfileImage,
    updateUserAvatarImage
} from "../../../redux/thunk";
import {AccountChangeForm, ImageLoadForm} from "../../../forms";

import styles from "./Account.module.scss"
import {useImage} from "../../../hooks";

const Account = ({updateCurrentUser, getImage, sendImage, updateUserAvatarImage, updateUserProfileImage}) => {
    const current_user = useSelector(state => state.auth.current_user)
    const avatar_image = useImage(current_user?.images.avatar_image.small, getImage)
    const profile_image = useImage(current_user?.images.profile_image.small, getImage)
    const [isAvatarChangingWindowOpened, toggleAvatarChangingWindow] = useState(false)
    const [isProfileChangingWindowOpened, toggleProfileChangingWindow] = useState(false)

    const onAvatarImageLoad = (image_name) => {
        updateUserAvatarImage(current_user, image_name)
        getImage(image_name)
    }
    const onProfileImageLoad = (image_name) => {
        updateUserProfileImage(current_user, image_name)
        getImage(image_name)
    }

    if(!current_user) return <Loader/>

    return (
        <div className={styles.container}>
            <h2>Account settings</h2>
            <div className={styles.account_change_form}>
                <AccountChangeForm current_user={current_user} updateCurrentUser={updateCurrentUser}/>
            </div>
            <div className={styles.images_container}>
                <div>
                    <h3>Avatar</h3>
                    <div
                        className={styles.change_image_button}
                        onClick={()=>toggleAvatarChangingWindow(true)}
                    >
                        <div className={styles.avatar_image}>
                            <img src={avatar_image?.src} alt=""/>
                        </div>
                        <span>Change</span>
                    </div>
                    {isAvatarChangingWindowOpened &&
                        <ModalWindow closeWindow={()=>toggleAvatarChangingWindow(false)}>
                            <h3>Avatar</h3>
                            <ImageLoadForm
                                sendImage={sendImage}
                                fileName={`${current_user.login}_avatar`}
                                onImageLoad={onAvatarImageLoad}
                            />
                        </ModalWindow>
                    }
                </div>
                <div>
                    <h3>Profile image</h3>
                    <div
                        className={styles.change_image_button}
                        onClick={()=>toggleProfileChangingWindow(true)}
                    >
                        <div>
                            <img src={profile_image?.src} alt=""/>
                        </div>
                        <span>Change</span>
                    </div>
                    {isProfileChangingWindowOpened &&
                        <ModalWindow closeWindow={()=>toggleProfileChangingWindow(false)}>
                            <h3>Profile image</h3>
                            <ImageLoadForm
                                sendImage={sendImage}
                                fileName={`${current_user.login}_profile`}
                                onImageLoad={onProfileImageLoad}
                            />
                        </ModalWindow>
                    }
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = () => ({})

export default connect(
    mapStateToProps,
    {updateCurrentUser, getImage, sendImage, updateUserAvatarImage, updateUserProfileImage}
)(Account)