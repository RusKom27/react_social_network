import {PostAPI, UserAPI} from "../../packages/api";
import {setUser} from "../reducers/profile";
import {AppDispatch} from "../store";

export const subscribeUser = (login: string) => (dispatch: AppDispatch) => {
    UserAPI.subscribeUser(login).then(user => {
        dispatch(setUser(user.data))
    })
}




