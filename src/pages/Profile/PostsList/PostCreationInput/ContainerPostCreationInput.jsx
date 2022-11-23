import {createRef} from "react"
import styles from "./PostCreationInput.module.scss"
import {ACTION} from "../../../../redux/actions";
import {PostCreationInput} from "./PostCreationInput";


function ContainerPostCreationInput({store}) {
    const addPost = () => {
        store.dispatch(ACTION.ADD_POST())
    }

    return <PostCreationInput addPost={addPost} />
}

export {ContainerPostCreationInput}