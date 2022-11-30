import React from "react"
import {connect} from "react-redux";
import {toggleMenuTab} from "../redux/actions";
import {Layout} from "./Layout";

const mapStateToProps = (state) => ({
    isMenuTabOpened: state.menu.isMenuTabOpened
})

const LayoutContainer = connect(
    mapStateToProps,
    {toggleMenuTab}
)(Layout)

export {LayoutContainer}