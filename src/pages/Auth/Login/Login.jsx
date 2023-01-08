import React from "react"
import {Link} from "react-router-dom";

import {LoginForm} from "../../../forms";

import styles from "./Login.module.scss"

export const Login = () => {
    return (
        <div>
            <div><h2>Login</h2></div>

            <LoginForm/>

            <div>
                <Link to={"/auth/register"}>Register new account</Link>
            </div>
        </div>
    )
}