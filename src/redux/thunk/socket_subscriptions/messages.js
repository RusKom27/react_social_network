import {CHANNEL, subscribeToChannel} from "../../../packages/ably";
import {addDialog, addMessage, updateMessage} from "../../reducers/messages";
import {config} from "../../../packages/api/config";

export const subscribeToMessageChannel = (dispatch) => {
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
}