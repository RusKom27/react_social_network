import styles from "./Feed.module.scss"
import {PostsList} from "../../components";
import {connect} from "react-redux";
import {getPosts} from "../../redux/thunk";
import {useUpdateWithDelay} from "../../hooks/useUpdateWithDelay";

function Feed({getPosts}) {
    useUpdateWithDelay('', getPosts, 1000)

    return (
        <div className={styles.container}>
            <PostsList/>
        </div>
    )
}

const mapStateToProps = (state) => ({})

export default connect(mapStateToProps, {getPosts})(Feed)
