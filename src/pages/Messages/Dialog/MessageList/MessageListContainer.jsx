import {MessageList} from "./MessageList";
import {connect} from "react-redux";

const mapStateToProps = (state, {dialog_id}) => ({
    messages: state.messages ? state.messages.dialogs.find(dialog => "" + dialog.id === dialog_id).messages : []
})

const mapDispatchToProps = dispatch => ({})

const MessageListContainer = connect(mapStateToProps, mapDispatchToProps)(MessageList)

export {MessageListContainer}