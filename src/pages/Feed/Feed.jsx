import styles from "./Feed.module.scss"
import {PostsList} from "../../components";
import {connect} from "react-redux";
import {getPosts} from "../../redux/thunk";
import {useEffect} from "react";

function Feed({getPosts}) {
    useEffect(() => {
        getPosts()
    }, [])

    return (
        <div className={styles.container}>
            <PostsList/>
        </div>
    )
}

const mapStateToProps = () => ({})

export default connect(mapStateToProps, {getPosts})(Feed)
