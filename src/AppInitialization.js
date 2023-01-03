import {connect, useSelector} from "react-redux";
import {initializeApp} from "./redux/thunk";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

const AppInitialization = ({token, initializeApp}) => {
    const navigate = useNavigate()

    useEffect(() => {
        if (token) initializeApp(token)
        else navigate("/auth/login")
    }, [token])

    return null
}

export default connect(null, {initializeApp})(AppInitialization)