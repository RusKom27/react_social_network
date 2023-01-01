import {connect, useSelector} from "react-redux";

import {Button} from "../Button/Button";
import {useImage} from "../../../hooks";
import {getImage, sendImage} from "../../../redux/thunk";

import styles from "./ImageLoader.module.scss"

const ImageLoader = ({file_name, onLoad, getImage, sendImage}) => {
    const user = useSelector(state => state.auth.current_user)
    const image = useImage(file_name, getImage)

    const send_image = (event) => {
        event.preventDefault()
        let formData = new FormData();
        let imageFile = event.target['image'];
        const fileType = imageFile.files[0].name.split('.').at(-1)
        const fileName = `${file_name}.${fileType}`
        console.log(URL.createObjectURL(imageFile.files[0]))
        formData.append("image", imageFile.files[0], fileName);
        sendImage(formData, image => onLoad(image))
    }

    return (
        <div className={styles.container}>
            <div>
                {image.src && <img src={image.src} alt=""/>}
            </div>
            <form onSubmit={send_image}>
                <label>
                    <input name={"image"} accept={"image/*"} type="file"/>
                    Upload image
                </label>
                <Button type={"submit"}>Save</Button>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => ({})

export default connect(mapStateToProps, {getImage, sendImage})(ImageLoader)