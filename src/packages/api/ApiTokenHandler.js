import {useEffect} from "react";
import {setToken} from "./config";
import {connect} from "react-redux";

const ApiTokenHandler = ({token}) => {
    useEffect(() => {
        setToken(token)
    }, [token])

    return null
}

const mapStateToProps = (state) => ({
    token: state.auth.token
})

export default connect(mapStateToProps)(ApiTokenHandler)