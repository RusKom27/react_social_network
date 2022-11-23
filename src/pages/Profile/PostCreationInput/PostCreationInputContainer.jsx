import {ACTION} from "../../../redux/actions";
import {PostCreationInput} from "./PostCreationInput";

function PostCreationInputContainer({store}) {
    const state = store.getState()
    const postInputText = state.profile.postInputText
    const addPost = () => store.dispatch(ACTION.ADD_POST())
    const updatePostInput = text => store.dispatch(ACTION.UPDATE_POST_INPUT(text))

    return <PostCreationInput addPost={addPost} updatePostInput={updatePostInput} postInputText={postInputText}/>
}

export {PostCreationInputContainer}