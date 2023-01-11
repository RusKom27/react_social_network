import {useDispatch, useSelector} from "react-redux";
import {toggleSearchResults} from "../../../redux/reducers/search";

import styles from "./SearchResults.module.scss"
import {AccountsSearchResults} from "./AccountsSearchResults/AccountsSearchResults";
import {TopicSearchResults} from "./TopicSearchResults/TopicSearchResults";

export const SearchResults = () => {
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
                <TopicSearchResults limit={5}/>
                <h3>Accounts</h3>
                <AccountsSearchResults limit={5}/>
            </div>
        </div>

    )
}