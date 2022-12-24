import {ImageAPI} from "../../packages/api";
import {addImage} from "../actions";

export const getImage = (image_name) => (dispatch) => {
    ImageAPI.getImage(image_name).then(image => {
        dispatch(addImage(image.data))
    })
}