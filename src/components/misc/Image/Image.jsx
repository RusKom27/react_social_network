import {connect, useSelector} from "react-redux";

import {getImage} from "../../../redux/thunk";

import styles from "./Image.module.scss"
import {useEffect} from "react";

const Image = ({image_styles, image_name, getImage}) => {
    const image = useSelector(state => {
        return state.images.images[image_name]
    })
    useEffect(() => {
        if(!image) {
            console.log(image_name)
            getImage(image_name)
        }
    })

    return (
        <div className={`${styles.image} ${image_styles}`}>
            {image?.image ?
                <img src={`data:${image.contentType};base64,${image.image}`} alt=""/> :
                <img className={styles.empty_image} alt=""></img>
            }
        </div>
    )
}

export default connect(
    ()=>({}),
    {getImage}
)(Image)