import React, {FC} from "react";
import {Link} from "react-router-dom";

import {AccountResult} from "./AccountResult/AccountResult";
import {useAppSelector} from "../../../../hooks/redux";

import styles from "./AccountsSearchResults.module.scss"

type PropsType = {
    limit?: number,
}

export const AccountsSearchResults: FC<PropsType> = ({limit}) => {
    const {users} = useAppSelector(state => state.search.results)
    const accounts_components = users.slice(0, limit).map((account, i) =>
        <AccountResult key={i} account={account}/>
    )

    return (
        <div className={styles.container}>
            {accounts_components}
            {limit && users.length > limit && <div><Link to={'/search_results/accounts'}>Show more...</Link></div>}
            {users.length < 1 && <div>Not found</div>}
        </div>

    )
}