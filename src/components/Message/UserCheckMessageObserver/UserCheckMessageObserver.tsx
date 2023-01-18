import React, {memo, useEffect, useRef, useState} from "react"

import {useOnScreen} from "../../../hooks";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {checkMessage} from "../../../redux/thunk";
import {IMessage} from "../../../models";

import styles from "./UserCheckMessageObserver.module.scss"

type PropsType = {
    message: IMessage
}

export const UserCheckMessageObserver = memo<PropsType>(({message}) => {
    const dispatch = useAppDispatch()
    const {isVisible, ref} = useOnScreen()

    const current_user = useAppSelector(state => state.auth.current_user)

    useEffect(() => {
        if(isVisible && !message.checked && message.sender_id !== current_user?._id) {
            dispatch(checkMessage(message._id))
        }
    }, [isVisible, message])

    return <div className={styles.container} ref={ref}></div>
})