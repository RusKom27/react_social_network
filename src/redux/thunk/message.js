import {MessageAPI} from "../../packages/api/rest/message";
import {addMessage, setMessages} from "../actions";
import {messageEventStream} from "../../packages/api";

export const connectMessageEventStream = () => (dispatch) => {
    const onConnect = (message) => {
        console.log(`Connected ${message}`)
        dispatch(setMessages(message))
    }

    const onMessage = (message) => {
        console.log(message)
        dispatch(setMessages(message))
    }


    messageEventStream.connect(onConnect, onMessage)
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