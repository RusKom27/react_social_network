import styles from "./Image.module.scss"
import {connect, useSelector} from "react-redux";
import {getImage} from "../../../redux/thunk/image";
import {useEffect} from "react";

const Image = ({image_styles, image_name, getImage}) => {
    const image = useSelector(state => state.images.images[image_name])

    useEffect(() => {
        if (!image) {
            getImage(image_name)
        }
    }, [image])

    return (
        <div className={`${styles.image} ${image_styles}`}>
            {image?.image && <img src={`data:${image.contentType};base64,${image.image}`} alt=""/>}
        </div>
    )
}

export default connect(
    ()=>({}),
    {getImage}
)(Image)