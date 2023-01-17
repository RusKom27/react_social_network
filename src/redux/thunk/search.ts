import {setSearchResults, toggleSearchResults} from "../reducers/search";
import {SearchAPI} from "../../packages/api/rest/search";

export const searchByUserInput = (user_input) => (dispatch) => {
    return SearchAPI.searchByUserInput(user_input).then(results => {
        dispatch(setSearchResults(results.data))
    }).catch(reason => {
        dispatch(toggleSearchResults(false))
    })
}