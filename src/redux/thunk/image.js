import {ImageAPI} from "../../packages/api";
import {addImage} from "../reducers/images";

export const getImage = (image_name) => (dispatch, getState) => {
    try {
        const images = getState().images.images
        if (!images[image_name])
            ImageAPI.getImage(image_name).then(image => {
                dispatch(addImage(image.data))
            })
    } catch (err) {

    }

}

export const sendImage = (imageData, then) => (dispatch) => {
    ImageAPI.sendImage(imageData).then(image => {
        then(image)
    })
}