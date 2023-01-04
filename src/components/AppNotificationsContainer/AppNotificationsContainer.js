import {connect, useSelector} from "react-redux";
import {useEffect} from "react";
import {removeNotification} from "../../redux/actionCreators/app";

import styles from "./AppNotificationContainer.module.scss"
import {PopupBox} from "../misc/PopupBox/PopupBox";

const AppNotificationsContainer = ({removeNotification}) => {
    const notifications = useSelector(state => state.app.notifications)

    useEffect(() => {
        if (notifications[0]) {
            if (notifications.length > 6) removeNotification(notifications[0]?.id)
            else {
                setTimeout(() => {
                    removeNotification(notifications[0]?.id)
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
                        closeBox={() => removeNotification(notification.id)}
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

export default connect(null, {removeNotification})(AppNotificationsContainer)