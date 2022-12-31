import {connect, useSelector} from "react-redux";
import {useState} from "react";

import {Button, ImageLoader, Loader} from "../../../components";
import {updateCurrentUser, getImage} from "../../../redux/thunk";

import styles from "./Account.module.scss"

const Account = ({updateCurrentUser, getImage}) => {
    const current_user = useSelector(state => state.auth.current_user)

    const [userName, setUserName] = useState(current_user?.name)
    const [userLogin, setUserLogin] = useState(current_user?.login)

    const on_avatar_load = (image) => {
        const new_user = {
            ...current_user,
            images: {
                ...current_user.images,
                avatar_image: {
                    big: image.data.name,
                    small: image.data.name
                }
            }
        }
        updateCurrentUser(new_user)
        getImage(image.data.name)
    }
    const on_profile_image_load = (image) => {
        const new_user = {
            ...current_user,
            images: {
                ...current_user.images,
                profile_image: {
                    big: image.data.name,
                    small: image.data.name
                }
            }
        }
        updateCurrentUser(new_user)
        getImage(image.data.name)
    }

    const on_account_data_change = (event) => {
        event.preventDefault()
        const new_user = {
            ...current_user,
            name: userName,
            login: userLogin,
        }
        updateCurrentUser(new_user)
    }

    if(!current_user) return <Loader/>

    return (
        <div className={styles.container}>
            <h2>Account settings</h2>
            <div>
                <form className={styles.account_change_form} onSubmit={on_account_data_change}>
                    <div>
                        <label htmlFor="user_name">Username</label>
                        <input
                            type={"text"}
                            onChange={event => setUserName(event.target.value)}
                            name={"user_name"}
                            id={"user_name"}
                            value={userName}
                        />
                    </div>
                    <div>
                        <label htmlFor="user_login">User login</label>
                        <input
                            type={"text"}
                            onChange={event => setUserLogin(event.target.value)}
                            name={"user_login"}
                            id={"user_login"}
                            value={userLogin}
                        />
                    </div>
                    <Button type={"submit"}>
                        Save
                    </Button>
                </form>
            </div>
            <div>
                <div>
                    <h3>Avatar</h3>
                    <ImageLoader
                        onLoad={on_avatar_load}
                        file_name={`${current_user.login}_avatar`}
                        demo_image_name={current_user.images.avatar_image.small}/>
                </div>
            </div>
            <div>
                <div>
                    <h3>Profile image</h3>
                    <ImageLoader
                        onLoad={on_profile_image_load}
                        file_name={`${current_user.login}_profile`}
                        demo_image_name={current_user.images.profile_image.small}
                    />
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