import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getImage} from "../redux/thunk";

export const useImage = (image_name) => {
    const dispatch = useDispatch()
    const image = useSelector(state => {
        return state.images.images[image_name]
    })

    useEffect(() => {
        if (!image) {
            dispatch(getImage(image_name))
        }
    }, [image])

    return {
        ...image,
        src: image?.image ? `data:${image?.contentType};base64,${image?.image}` : null
    }
}