import styles from "./Image.module.scss"
import {ImageAPI} from "../../../packages/api/rest/image";
import {useEffect, useState} from "react";

export const Image = ({image_name}) => {
    const [image, setImage] = useState({data: '', type: ''})
    useEffect(() => {
        ImageAPI.getImage(image_name).then(image => {
            setImage({
                data: image.data.image,
                type: image.data.contentType
            })
        })
    }, [image_name])

    return (
        <div className={styles.image}>
            {image.data && <img src={`data:${image.type};base64,${image.data}`} alt=""/>}
        </div>
    )
}