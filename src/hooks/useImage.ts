import {useEffect} from "react";
import {getImage} from "../redux/thunk";
import {useAppDispatch, useAppSelector} from "./redux";

export const useImage = (image_name: string) => {
    const dispatch = useAppDispatch()
    const image = useAppSelector(state => {
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