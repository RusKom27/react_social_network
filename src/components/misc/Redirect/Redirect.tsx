import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {useAppSelector} from "../../../hooks/redux";

export const Redirect = () => {
    const navigate = useNavigate()
    const token = useAppSelector(state => state.auth.token)
    useEffect(() => {
        if (token) return navigate("/")
        else return  navigate("/auth/login")
    })
}