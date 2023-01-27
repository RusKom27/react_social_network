import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";

import {Loader, ModalWindow} from "../../../components";
import {getImage, updateUserProfileImage, updateUserAvatarImage} from "../../../redux/thunk";
import {AccountChangeForm, ImageLoadForm} from "../../../forms";

import styles from "./Account.module.scss"
import {Image} from "../../../components/misc/Image/Image";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";

export const Account = () => {
    const current_user = useAppSelector(state => state.auth.current_user)
    const dispatch = useAppDispatch()

    const [isAvatarChangingWindowOpened, toggleAvatarChangingWindow] = useState(false)
    const [isProfileChangingWindowOpened, toggleProfileChangingWindow] = useState(false)
    // TODO user settings
    if(!current_user) return <Loader/>

    // const onAvatarImageLoad = (image_name: string) => {
    //     dispatch(updateUserAvatarImage(current_user, image_name))
    //     dispatch(getImage(image_name))
    // }
    // const onProfileImageLoad = (image_name: string) => {
    //     dispatch(updateUserProfileImage(current_user, image_name))
    //     dispatch(getImage(image_name))
    // }

    return (
        <div className={styles.container}>
            <h2>Account settings</h2>
            {/*<div className={styles.account_change_form}>*/}
            {/*    <AccountChangeForm current_user={current_user}/>*/}
            {/*</div>*/}
            {/*<div className={styles.images_container}>*/}
            {/*    <div>*/}
            {/*        <h3>Avatar</h3>*/}
            {/*        <div*/}
            {/*            className={styles.change_image_button}*/}
            {/*            onClick={()=>toggleAvatarChangingWindow(true)}*/}
            {/*        >*/}
            {/*            <div className={styles.avatar_image}>*/}
            {/*                <Image type={"avatar"} image_name={current_user.images.avatar_image.small}/>*/}
            {/*            </div>*/}
            {/*            <span>Change</span>*/}
            {/*        </div>*/}
            {/*        {isAvatarChangingWindowOpened &&*/}
            {/*            <ModalWindow closeWindow={()=>toggleAvatarChangingWindow(false)} title={"Avatar image uploading"}>*/}
            {/*                <ImageLoadForm*/}
            {/*                    fileName={`${current_user.login}_avatar`}*/}
            {/*                    onImageLoad={onAvatarImageLoad}*/}
            {/*                />*/}
            {/*            </ModalWindow>*/}
            {/*        }*/}
            {/*    </div>*/}
            {/*    <div>*/}
            {/*        <h3>Profile image</h3>*/}
            {/*        <div*/}
            {/*            className={styles.change_image_button}*/}
            {/*            onClick={()=>toggleProfileChangingWindow(true)}*/}
            {/*        >*/}
            {/*            <div>*/}
            {/*                <Image image_name={current_user.images.profile_image.small}/>*/}
            {/*            </div>*/}
            {/*            <span>Change</span>*/}
            {/*        </div>*/}
            {/*        {isProfileChangingWindowOpened &&*/}
            {/*            <ModalWindow closeWindow={()=>toggleProfileChangingWindow(false)} title={"Profile image uploading"}>*/}
            {/*                <ImageLoadForm*/}
            {/*                    fileName={`${current_user.login}_profile`}*/}
            {/*                    onImageLoad={onProfileImageLoad}*/}
            {/*                />*/}
            {/*            </ModalWindow>*/}
            {/*        }*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    )
}