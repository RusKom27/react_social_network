import {createSlice} from "@reduxjs/toolkit";

interface State {
    images: any
}

const initialState: State = {
    images: {}
}

const imagesSlice = createSlice({
    name: "images",
    initialState,
    reducers: {
        addImage(state, action) {
            state.images[action.payload.name] = action.payload
        },
    }
})

export default imagesSlice.reducer
export const {
    addImage
} = imagesSlice.actions