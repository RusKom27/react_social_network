import React from "react"
import {ACTION} from "../../../../redux/actions";
import {MessageInput} from "./MessageInput";
import {connect} from "react-redux";

const mapStateToProps = (state) => ({
    messageInputValue: state.messages.messageInputValue
})

const mapDispatchToProps = (dispatch, {dialog_id}) => ({
    addMessage: () => {
        dispatch(ACTION.ADD_MESSAGE(dialog_id))
    },

    updateMessageInput: text => {
        dispatch(ACTION.UPDATE_MESSAGE_INPUT(text))
    }
})

const MessageInputContainer = connect(mapStateToProps, mapDispatchToProps)(MessageInput)

export {MessageInputContainer}