import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {ImageAPI} from "../packages/api";
import {addImage} from "../redux/actionCreators/images";

export const useImage = (image_name, getImage) => {
    const [image, setImage] = useState(null)

    // const image = useSelector(state => {
    //     return state.images.images[image_name]
    // })
    

    useEffect(() => {
        ImageAPI.getImage(image_name).then(image => {
            setImage(image.data)
        })
        // if(!image) {
        //     getImage(image_name)
        // }
    }, [image_name])

    return {
        ...image,
        src: image?.image ? `data:${image?.contentType};base64,${image?.image}` : null
    }
}