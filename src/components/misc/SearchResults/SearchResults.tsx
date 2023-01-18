import React, {FC, MouseEventHandler} from "react";
import {toggleSearchResults} from "../../../redux/reducers/search";
import {AccountsSearchResults} from "./AccountsSearchResults/AccountsSearchResults";
import {TopicSearchResults} from "./TopicSearchResults/TopicSearchResults";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";

import styles from "./SearchResults.module.scss"

export const SearchResults: FC = () => {
    const {isResultDisplaying} = useAppSelector(state => state.search)
    const dispatch = useAppDispatch()

    if (!isResultDisplaying) return null

    const onClickHandler: MouseEventHandler<HTMLDivElement> = (event ) => {
        if (!(event.target instanceof Element)) return
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