
import {makeRequest} from "../makeRequest";

export const SearchAPI = {
    searchByUserInput(user_input) {
        return makeRequest({
            url: `api/search?user_input=${user_input.trim()}`,
            headers: {authorization: false},
            method: 'GET'
        })
    }
}