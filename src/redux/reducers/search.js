import {createSlice} from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState: {
        isLoading: true,
        results: {
            tags: null,
            users: null,
        }
    },
    reducers: {
        setSearchResults(state, action) {
            state.images[action.payload.name] = action.payload
        },
    }
})

export default searchSlice.reducer
export const {
    setSearchResults
} = searchSlice.actions