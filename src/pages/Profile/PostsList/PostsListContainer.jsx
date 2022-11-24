import React from "react"
import {PostsList} from "./PostsList";
import {connect} from "react-redux";

const mapStateToProps = state => ({
    posts: state.profile.posts
})

const mapDispatchToProps = dispatch => ({
})

const PostsListContainer = connect(mapStateToProps, mapDispatchToProps)(PostsList)

export {PostsListContainer}