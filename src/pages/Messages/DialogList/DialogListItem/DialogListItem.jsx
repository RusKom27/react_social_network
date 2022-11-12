import styles from "./DialogListItem.module.scss"
import {NavLink} from "react-router-dom";

function DialogListItem(props) {
    const activeClassName = ({isActive}) => isActive ? styles.active : undefined

    return (
        <NavLink className={activeClassName} to={`dialog/${props.id}`}>
            <div className={styles.item}>
                <div className={styles.username}>
                    {props.username}
                </div>
                <div className={styles.message_text}>
                    {props.message}
                </div>
            </div>
        </NavLink>

    )
}

export {DialogListItem}