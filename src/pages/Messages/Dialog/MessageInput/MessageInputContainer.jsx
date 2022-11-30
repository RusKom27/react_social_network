import {addMessage, updateMessageInput} from "../../../../redux/actions";
import {MessageInput} from "./MessageInput";
import {connect} from "react-redux";

const mapStateToProps = (state) => ({
    messageInputValue: state.messages.messageInputValue
})

const MessageInputContainer = connect(
    mapStateToProps,
    {updateMessageInput, addMessage}
)(MessageInput)

export {MessageInputContainer}