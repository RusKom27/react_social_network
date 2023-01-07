import React from "react"
import {connect} from "react-redux";

import styles from "./SideBar.module.scss"

function SideBar({children}) {
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}

export default connect(null, null)(SideBar)