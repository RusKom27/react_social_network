import {createSlice} from "@reduxjs/toolkit";

const imagesSlice = createSlice({
    name: "images",
    initialState: {
        images: {}
    },
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