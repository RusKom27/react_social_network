import {connect, useSelector} from "react-redux";
import {useState} from "react";

import {Button, ImageLoader, Loader} from "../../../components";
import {updateCurrentUser, getImage} from "../../../redux/thunk";

import styles from "./Account.module.scss"
import {AccountChangeForm} from "../../../forms/AccountChangeForm";

const Account = ({updateCurrentUser, getImage}) => {
    const current_user = useSelector(state => state.auth.current_user)

    // const on_avatar_load = (image) => {
    //     const new_user = {
    //         ...current_user,
    //         images: {
    //             ...current_user.images,
    //             avatar_image: {
    //                 big: image.data.name,
    //                 small: image.data.name
    //             }
    //         }
    //     }
    //     updateCurrentUser(new_user)
    //     getImage(image.data.name)
    // }
    // const on_profile_image_load = (image) => {
    //     const new_user = {
    //         ...current_user,
    //         images: {
    //             ...current_user.images,
    //             profile_image: {
    //                 big: image.data.name,
    //                 small: image.data.name
    //             }
    //         }
    //     }
    //     updateCurrentUser(new_user)
    //     getImage(image.data.name)
    // }

    if(!current_user) return <Loader/>

    return (
        <div className={styles.container}>
            <h2>Account settings</h2>
            <div>
                <AccountChangeForm current_user={current_user} updateCurrentUser={updateCurrentUser}/>
            </div>
            <div>
                <div>
                    <h3>Avatar</h3>
                    {/*<ImageLoader*/}
                    {/*    onLoad={on_avatar_load}*/}
                    {/*    file_name={`${current_user.login}_avatar`}*/}
                    {/*    demo_image_name={current_user.images.avatar_image.small}*/}
                    {/*/>*/}
                </div>
            </div>
            <div>
                <div>
                    <h3>Profile image</h3>
                    {/*<ImageLoader*/}
                    {/*    onLoad={on_profile_image_load}*/}
                    {/*    file_name={`${current_user.login}_profile`}*/}
                    {/*    demo_image_name={current_user.images.profile_image.small}*/}
                    {/*/>*/}
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = () => ({})

export default connect(
    mapStateToProps,
    {updateCurrentUser, getImage}
)(Account)