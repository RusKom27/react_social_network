import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {removeNotification} from "../../redux/slices/app";

import styles from "./AppNotificationContainer.module.scss"
import {PopupBox} from "../misc/PopupBox/PopupBox";

export const AppNotificationsContainer = () => {
    const notifications = useSelector(state => state.app.notifications)
    const dispatch = useDispatch()

    useEffect(() => {
        if (notifications[0]) {
            if (notifications.length > 6) dispatch(removeNotification(notifications[0]?.id))
            else {
                setTimeout(() => {
                    dispatch(removeNotification(notifications[0]?.id))
                }, 2000)
            }

        }
    }, [notifications])

    return (
        <div className={styles.container}>
            {notifications.map(notification => {
                return (
                    <PopupBox
                        type={notification.type}
                        closeBox={() => dispatch(removeNotification(notification.id))}
                        key={notification.id}
                    >
                        {notification.message}
                    </PopupBox>
                )
            }
            )}
        </div>
    )
}