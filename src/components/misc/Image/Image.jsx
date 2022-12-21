import styles from "./Image.module.scss"
import {connect, useSelector} from "react-redux";
import {getImage} from "../../../redux/thunk/image";
import {useEffect} from "react";

const Image = ({image_name, getImage}) => {
    const image = useSelector(state => state.images.images[image_name])

    useEffect(() => {
        if (!image) {
            getImage(image_name)
        }
    })

    return (
        <div className={styles.image}>
            {image?.image && <img src={`data:${image.contentType};base64,${image.image}`} alt=""/>}
        </div>
    )
}

export default connect(
    ()=>({}),
    {getImage}
)(Image)