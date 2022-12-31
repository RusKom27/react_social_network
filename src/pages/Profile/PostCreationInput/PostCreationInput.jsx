import {connect} from "react-redux";

import {createProfilePost} from "../../../redux/thunk";
import {PostCreationForm} from "../../../forms/PostCreationForm";

import styles from "./PostCreationInput.module.scss"

const PostCreationInput = ({createProfilePost}) => {
    return (
        <div className={styles.post_creating_form}>
            <PostCreationForm createProfilePost={createProfilePost}/>
        </div>
    )
}

const mapStateToProps = () => ({})

export default connect(mapStateToProps, {createProfilePost})(PostCreationInput)