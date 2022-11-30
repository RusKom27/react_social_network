import React from "react"
import {connect} from "react-redux";
import {DialogList} from "./DialogList";
import {toggleMenuTab} from "../../../redux/actions";

const mapStateToProps = (state) => ({
    dialogs: state.messages.dialogs,
    isMenuTabOpened: state.menu.isMenuTabOpened
})

const DialogListContainer = connect(mapStateToProps, {toggleMenuTab})(DialogList)

export {DialogListContainer}