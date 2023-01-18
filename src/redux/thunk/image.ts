import {ImageAPI} from "../../packages/api";
import {addImage} from "../reducers/images";
import {AppDispatch, RootState} from "../store";

export const getImage = (image_name: string) => (dispatch: AppDispatch, getState: () => RootState) => {
    try {
        const images = getState().images.images
        if (!images[image_name])
            ImageAPI.getImage(image_name).then(image => {
                dispatch(addImage(image.data))
            })
    } catch (err) {

    }

}

export const sendImage = (imageData: any, then: any) => (dispatch: AppDispatch) => {

    // console.log(imageData.values())
    ImageAPI.sendImage(imageData).then(image => {
        then(image)
    })
}