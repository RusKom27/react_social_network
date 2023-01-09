import {ImageAPI} from "../../packages/api";
import {addImage} from "../reducers/images";

export const getImage = (image_name) => (dispatch) => {
    ImageAPI.getImage(image_name).then(image => {
        dispatch(addImage(image.data))
    })
}

export const sendImage = (imageData, then) => (dispatch) => {
    ImageAPI.sendImage(imageData).then(image => {
        then(image)
    })
}