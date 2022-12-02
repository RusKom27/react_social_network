import {PostsList} from "./PostsList";
import {connect} from "react-redux";
import {setToken} from "../../../redux/actions";


const mapStateToProps = state => ({
    posts: state.profile.posts
})

const PostsListContainer = connect(mapStateToProps, {setToken})(PostsList)

export {PostsListContainer}