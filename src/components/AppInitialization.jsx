import {useDispatch} from "react-redux";
import {initializeApp} from "../redux/thunk";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

export const AppInitialization = ({token}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        if (token) dispatch(initializeApp(token))
        else navigate("/auth/login")
    }, [token])

    return null
}