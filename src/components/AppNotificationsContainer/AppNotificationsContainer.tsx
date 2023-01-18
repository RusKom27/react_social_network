import React, {useEffect} from "react";

import {removeNotification} from "../../redux/reducers/app";
import {PopupBox} from "../misc/PopupBox/PopupBox";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";

import styles from "./AppNotificationContainer.module.scss"

export const AppNotificationsContainer = () => {
    const notifications = useAppSelector(state => state.app.notifications)
    const dispatch = useAppDispatch()

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
                        <span>{notification.message}</span>
                    </PopupBox>
                )
            }
            )}
        </div>
    )
}