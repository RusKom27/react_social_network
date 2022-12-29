import {connect, useSelector} from "react-redux";
import {useEffect, useState} from "react";

import {getImage} from "../../../redux/thunk";

import styles from "./Image.module.scss"

const Image = ({image_styles, image_name, getImage}) => {
    const image = useSelector(state => state.images.images[image_name])
    useEffect(() => {
        if (!image) getImage(image_name)
    }, [image])

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