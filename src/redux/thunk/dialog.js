import {DialogAPI} from "../../packages/api/rest/dialog";
import {setDialogs} from "../actions";

export const getDialogs = () => (dispatch) => {
    DialogAPI.getDialogs().then(dialogs => {
        dispatch(setDialogs(dialogs.data))
    })
}

export const createDialog = (member_id, then) => (dispatch) => {
    DialogAPI.createDialog(member_id).then(dialog => {
        then(dialog)
    })
}



