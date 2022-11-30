import {addPost, updatePostInput} from "../../../redux/actions";
import {PostCreationInput} from "./PostCreationInput";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        postInputText: state.profile.postInputText
    }
}

const PostCreationInputContainer = connect(
    mapStateToProps,
    {addPost, updatePostInput}
)(PostCreationInput)

export {PostCreationInputContainer}