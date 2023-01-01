import {ImageAPI} from "../../packages/api";
import {addImage} from "../actionCreators/images";

export const getImage = (image_name) => (dispatch) => {
    dispatch(addImage({name: image_name}))
    ImageAPI.getImage(image_name).then(image => {
        dispatch(addImage(image.data))
    })
}

export const sendImage = (imageData, then) => (dispatch) => {
    ImageAPI.sendImage(imageData).then(image => {
        then(image)
    })
}