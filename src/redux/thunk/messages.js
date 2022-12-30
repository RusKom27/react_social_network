import {MessageAPI} from "../../packages/api";
import {CHANNEL, subscribeToChannel} from "../../packages/ably";
import {addDialog, addMessage, setMessages, updateMessage} from "../actionCreators/messages";
import {config} from "../../packages/api/config";

export const getMessages = () => (dispatch) => {
    subscribeToChannel(CHANNEL.MESSAGES, message => {
        switch (message.name) {
            case 'new_message':
                dispatch(addMessage(message.data))
                break
            case 'new_dialog':
                if(message.data.members_id.includes(config.token))
                    dispatch(addDialog(message.data))
                break
            case 'check_message':
                dispatch(updateMessage(message.data))
                break
            default:
                console.log(message)
        }
    })

    MessageAPI.getMessages().then(messages => {
        dispatch(setMessages(messages.data))
    })
}

export const createMessage = (dialog_id, messageText) => (dispatch) => {
    MessageAPI.createMessage(dialog_id, messageText)
}

export const createDialog = (member_id, then) => () => {
    MessageAPI.createDialog(member_id).then(dialog => {
        then(dialog)
    })
}

export const checkMessage = (message_id) => () => {
    MessageAPI.checkMessage(message_id)
}