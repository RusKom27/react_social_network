import {UserAPI} from "../../packages/api/rest/user";
import {setUser} from "../actions";

export const getUser = (login) => (dispatch) => {
    UserAPI.getUser(login).then(user => {
        dispatch(setUser(user.data))
    })
}
