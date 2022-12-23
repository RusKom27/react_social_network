import {connect, useSelector} from "react-redux";

import {Image, ImageLoader, Loader} from "../../../components";
import {updateCurrentUser} from "../../../redux/thunk";

import styles from "./Account.module.scss"
import {useEffect} from "react";

const Account = ({updateCurrentUser}) => {
    const current_user = useSelector(state => state.auth.current_user)
    useEffect(() => {
        // console.log(current_user)
    })
    const on_image_load = (image) => {
        const new_user = {
            ...current_user,
            images: {
                avatar_image: {
                    big: image.data.name,
                    small: image.data.name
                }
            }
        }
        updateCurrentUser(new_user)
    }

    if(!current_user) return <Loader/>

    return (
        <div className={styles.container}>
            <div>
                <div>
                    <Image image_styles={styles.avatar_demo} image_name={current_user.images.avatar_image.small}/>
                </div>
                <div>
                    <h3>Avatar</h3>
                    <ImageLoader onLoad={on_image_load} file_name={`${current_user.login}_avatar`}/>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = () => ({})

export default connect(
    mapStateToProps,
    {updateCurrentUser}
)(Account)