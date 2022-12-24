import {useEffect} from "react";
import {connect, useSelector} from "react-redux";

import {Loader, PostsList} from "../../components";
import {getPosts} from "../../redux/thunk";

import styles from "./Feed.module.scss"

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
