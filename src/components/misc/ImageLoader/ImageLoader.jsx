import styles from "./ImageLoader.module.scss"
import {ImageAPI} from "../../../packages/api/rest/image";
import {Button} from "../Button/Button";

export const ImageLoader = ({user_login, onLoad}) => {
    const send_image = (event) => {
        event.preventDefault()
        let formData = new FormData();
        let imageFile = event.target['image'];
        const fileType = imageFile.files[0].name.split('.').at(-1)
        const fileName = `${user_login}_avatar.${fileType}`
        formData.append("image", imageFile.files[0], fileName);
        ImageAPI.sendImage(formData).then(image => onLoad(image))
    }

    return (
        <div className={styles.container}>
            <form onSubmit={send_image}>
                <input name={"image"} type="file"/>
                <Button type={"submit"}>Send</Button>
            </form>
        </div>
    )
}