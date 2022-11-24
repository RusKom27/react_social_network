import {ACTION} from "../../../redux/actions";
import {PostCreationInput} from "./PostCreationInput";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        postInputText: state.profile.postInputText
    }
}

const mapDispatchToProps = dispatch => ({
    addPost: () => dispatch(ACTION.ADD_POST()),
    updatePostInput: text => dispatch(ACTION.UPDATE_POST_INPUT(text)),
})

const PostCreationInputContainer = connect(mapStateToProps, mapDispatchToProps)(PostCreationInput)

export {PostCreationInputContainer}