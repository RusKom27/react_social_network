import styles from "./ImageLoader.module.scss"
import {ImageAPI} from "../../../packages/api";
import {Button} from "../Button/Button";

export const ImageLoader = ({file_name, onLoad}) => {
    const send_image = (event) => {
        event.preventDefault()
        let formData = new FormData();
        let imageFile = event.target['image'];
        const fileType = imageFile.files[0].name.split('.').at(-1)
        const fileName = `${file_name}.${fileType}`
        formData.append("image", imageFile.files[0], fileName);
        ImageAPI.sendImage(formData).then(image => onLoad(image))
    }

    return (
        <div className={styles.container}>
            <form onSubmit={send_image}>
                <input name={"image"} accept={"image/*"} type="file"/>
                <Button type={"submit"}>Set</Button>
            </form>
        </div>
    )
}