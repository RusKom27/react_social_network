import {ACTION} from "../actionTypes";

const initialState = {
    dialogs: null,
    messages: null

}

const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION.MESSAGE.ADD_MESSAGE:
            if (!action.message.text && !action.message.image) return state
            return {
                ...state,
                messages: [
                    ...state.messages,
                    action.message
                ]
            }
        case ACTION.MESSAGE.SET_MESSAGES:
            console.log(action.messages)
            return {
                ...state,
                messages: action.messages
            }
        case ACTION.MESSAGE.SET_DIALOGS:
            return {
                ...state,
                dialogs: action.dialogs.map(dialog => {
                        return {
                            id: dialog._id,
                            members: dialog.members,
                            message: dialog.message
                        }
                    })
            }
        default:
            return state
    }
}

export {messageReducer}