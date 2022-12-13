import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

export const Redirect = () => {
    const navigate = useNavigate()
    const token = useSelector(state => state.auth.token)
    useEffect(() => {
        if (token) return navigate("/")
        else return  navigate("/auth/login")
    })
}