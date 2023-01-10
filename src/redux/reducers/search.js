import {createSlice} from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState: {
        isLoading: true,
        isResultDisplaying: false,
        results: {
            tags: null,
            topics: null,
        }
    },
    reducers: {
        setSearchResults(state, action) {
            state.results.topics = action.payload.topics
            state.results.users = action.payload.users
            state.isResultDisplaying = state.results.users.length > 0 || state.results.topics.length > 0
        },

        toggleSearchResults(state, action) {
            state.isResultDisplaying = action.payload
        }
    }
})

export default searchSlice.reducer
export const {
    setSearchResults,
    toggleSearchResults
} = searchSlice.actions