import {CHANNEL, subscribeToChannel} from "../../../packages/ably";
import {addDialog, addMessage, updateMessage} from "../../reducers/messages";
import {config} from "../../../packages/api/config";

export const subscribeToMessageChannel = (dispatch) => {
    subscribeToChannel(CHANNEL.MESSAGES, message => {
        switch (message.name) {

            default:
                console.log(message)
        }
    })
}