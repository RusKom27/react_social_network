import {ACTION} from "./actionTypes";

const updateMessageInput = (message_text) => ({
    type: ACTION.UPDATE_MESSAGE_INPUT,
    message_text
})

const addMessage = (dialog_id) => ({
    type: ACTION.ADD_MESSAGE,
    dialog_id
})

const updatePostInput = (post_text) => ({
    type: ACTION.UPDATE_POST_INPUT,
    post_text
})

const addPost = () => ({
    type: ACTION.ADD_POST,
})

const toggleMenuTab = (flag=undefined) => ({
    type: ACTION.TOGGLE_MENU_TAB,
    flag: flag
})

export {
    updateMessageInput,
    addMessage,
    updatePostInput,
    addPost,
    toggleMenuTab
}