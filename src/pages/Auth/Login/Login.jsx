import React from "react"
import {Link, useNavigate} from "react-router-dom";
import {connect} from "react-redux";
import {authUser} from "../../../redux/thunk";

import {Button} from "../../../components";

import styles from "./Login.module.scss"

const Login = ({authUser}) => {
    const navigate = useNavigate()
    const login = (event) => {
        event.preventDefault()
        authUser(
            event.target.email.value,
            event.target.password.value,
            user => navigate(`/profile/${user.data.login}`)
        )
    }

    return (
        <div>
            <div><h2>Login</h2></div>
            <form onSubmit={login}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" name="email"/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" name="password"/>
                </div>
                <div>
                    <Button type={"submit"}>Login</Button>
                </div>
            </form>


            <div><Link to={"/auth/register"}>Register</Link></div>
        </div>
    )
}


const mapStateToProps = () => ({})

export default connect(mapStateToProps, {authUser})(Login)