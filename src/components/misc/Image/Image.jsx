import {memo} from "react";
import {useSelector} from "react-redux";

export const Image = memo(({image_name}) => {
    const image = useSelector(state => {
        return state.images.images[image_name]
    })

    if (!image) return <img/>
    return <img src={`data:${image?.contentType};base64,${image?.image}`} alt=""/>
})