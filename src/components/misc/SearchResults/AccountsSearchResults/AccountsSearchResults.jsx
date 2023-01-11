import React from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

import {AccountResult} from "./AccountResult/AccountResult";

import styles from "./AccountsSearchResults.module.scss"

export const AccountsSearchResults = ({limit}) => {
    const {users} = useSelector(state => state.search.results)
    const accounts_components = users.slice(0, limit).map((account, i) =>
        <AccountResult key={i} account={account}/>
    )

    return (
        <div className={styles.container}>
            {accounts_components}
            {users.length > limit && <div><Link to={'/search_results/accounts'}>Show more...</Link></div>}
            {users.length < 1 && <div>Not found</div>}
        </div>

    )
}