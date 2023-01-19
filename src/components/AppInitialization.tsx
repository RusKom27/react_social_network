import {initializeApp} from "../redux/thunk";
import {useNavigate} from "react-router-dom";
import {FC, useEffect} from "react";
import {useAppDispatch} from "../hooks/redux";

type PropsType = {
    token: string
}

export const AppInitialization: FC<PropsType> = ({token}) => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (token) dispatch(initializeApp(token))
        else navigate("/auth/login")
    }, [token])

    return null
}