import {MessageAPI} from "../../packages/api";
import {addDialog, addMessage, setMessages, updateMessage} from "../reducers/messages";
import {AppDispatch} from "../store";

export const getMessages = () => (dispatch: AppDispatch) => {
    MessageAPI.getMessages().then(messages => {
        dispatch(setMessages(messages.data))
    })
}

export const createMessage = (dialog_id: string, messageText: string, then=(message: any)=>{}) => () => {
    MessageAPI.createMessage(dialog_id, messageText).then(message => {
        then(message)
    })
}

export const createDialog = (member_id: string, then=(dialog: any)=>{}) => () => {
    MessageAPI.createDialog(member_id).then(dialog => {
        then(dialog)
    })
}

export const checkMessage = (message_id: string) => () => {
    MessageAPI.checkMessage(message_id)
}