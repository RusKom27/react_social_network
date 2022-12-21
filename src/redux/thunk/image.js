import {ImageAPI} from "../../packages/api";
import {addImage} from "../actions";

export const getImage = (image_name) => (dispatch) => {
    ImageAPI.getImage(image_name).then(image => {
        console.log(image_name)
        dispatch(addImage(image.data))
    })
}