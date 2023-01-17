import {setSearchResults, toggleSearchResults} from "../reducers/search";
import {SearchAPI} from "../../packages/api/rest/search";
import {AppDispatch} from "../store";

export const searchByUserInput = (user_input: string) => (dispatch: AppDispatch) => {
    return SearchAPI.searchByUserInput(user_input).then(results => {
        dispatch(setSearchResults(results.data))
    }).catch(reason => {
        dispatch(toggleSearchResults(false))
    })
}