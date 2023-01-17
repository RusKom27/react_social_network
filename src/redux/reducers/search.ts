import {createSlice} from "@reduxjs/toolkit";
import IUser from "../../models/IUser";

interface State {
    isLoading: boolean
    isResultDisplaying: boolean
    results: {
        tags: string[],
        topics: string[],
        users: IUser[]
    }
}

const initialState: State = {
    isLoading: true,
    isResultDisplaying: false,
    results: {
        tags: [],
        topics: [],
        users: []
    }
}

const searchSlice = createSlice({
    name: "search",
    initialState,
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