import {useDispatch, useSelector} from "react-redux";
import {toggleSearchResults} from "../../../redux/reducers/search";

import styles from "./SearchResults.module.scss"

export const SearchResults = () => {
    const {users, topics} = useSelector(state => state.search.results)
    const {isResultDisplaying} = useSelector(state => state.search)
    const dispatch = useDispatch()

    if (!isResultDisplaying) return null

    const onClickHandler = (event) => {
        if (event.target.classList[0] === styles.container) dispatch(toggleSearchResults(false))
    }

    return (
        <div onClick={onClickHandler} className={styles.container}>
            <div className={styles.results}>
                <h3>Topics</h3>
                {topics ? topics.slice(0,5).map(topic =>
                    <div>{topic}</div>
                ) : ''}
                {topics.length > 5 && <div>Show more...</div>}
                <h3>Accounts</h3>
                {users ? users.slice(0,5).map(user =>
                    <div>{user.name}</div>
                ) : ''}
            </div>
        </div>

    )
}