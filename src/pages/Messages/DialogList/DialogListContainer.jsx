import React from "react"
import {connect} from "react-redux";
import {DialogList} from "./DialogList";

const mapStateToProps = (state) => ({
    dialogs: state.messages.dialogs
})

const mapDispatchToProps = dispatch => ({
})

const DialogListContainer = connect(mapStateToProps, mapDispatchToProps)(DialogList)

export {DialogListContainer}