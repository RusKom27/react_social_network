import {MessageAPI} from "../../packages/api/rest/message";
import {addMessage, setMessages} from "../actions";

const subscribe = async (dispatch) => {
    try {
        MessageAPI.getMessages(false).then( async messages => {
            console.log(messages.data)
            dispatch(setMessages(messages.data))
            await subscribe(dispatch)
        })
    } catch (e) {
        setTimeout(() => subscribe(dispatch), 5000)
    }
}

export const getMessages = (initial = true) => (dispatch) => {
    if (initial)
        MessageAPI.getMessages(true).then(messages => {
            dispatch(setMessages(messages.data))
        })
    else subscribe(dispatch)
}

export const createMessage = (dialog_id, messageText) => (dispatch) => {
    MessageAPI.createMessage(dialog_id, messageText).then(message => {
        dispatch(addMessage(message.data))
    })
}

export const createDialog = (member_id, then) => (dispatch) => {
    MessageAPI.createDialog(member_id).then(dialog => {
        then(dialog)
    })
}