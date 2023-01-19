import React, {FC} from "react"
import {useDispatch} from "react-redux";
import {NavLink} from "react-router-dom";

import {toggleMenuTab} from "../../../../redux/reducers/app";
import {IMessage, IUser} from "../../../../models";
import {userApi} from "../../../../services";
import {Loader} from "../../../../components";
import {useAppSelector} from "../../../../hooks/redux";

import styles from "./DialogListItem.module.scss"

type PropsType = {
    id: string
    last_message: IMessage
    members_id: string[]
    unchecked_messages_count: number
}

export const DialogListItem: FC<PropsType> = ({id, last_message, members_id, unchecked_messages_count}) => {
    const dispatch = useDispatch()
    const current_user = useAppSelector(state => state.auth.current_user)
    const activeClassName: (isActive: any) => any = ({isActive}) => isActive ? styles.active : ''
    const {data: last_message_sender, isLoading: userIsLoading} = userApi.useFetchUserByIdQuery(last_message.sender_id)
    const {data: members} = userApi.useFetchUserListByIdQuery(members_id)
    if (userIsLoading || !last_message_sender || !members) return <Loader/>
    const member_names = members
        .filter((member: IUser) => member.login !== current_user?.login).map(member => member.name).join(',')

    return (
        <NavLink className={activeClassName} to={`${id}`}>
            <div onClick={() => dispatch(toggleMenuTab(true))} className={styles.container}>
                <div className={styles.dialog_info}>
                    <div className={styles.member}>
                        {member_names}
                    </div>
                    <div className={styles.username}>
                        {last_message && last_message_sender.name}
                    </div>
                    <div className={styles.message_text}>
                        {last_message && last_message.text}
                    </div>
                </div>
                {unchecked_messages_count > 0 &&
                    <div className={styles.unchecked_messages_count}>
                        {unchecked_messages_count}
                    </div>
                }

            </div>
        </NavLink>
    )
}