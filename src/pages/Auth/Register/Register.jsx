import {Link} from "react-router-dom";

import {RegisterForm} from "../../../forms";

import styles from "./Register.module.scss"

export const Register = () => {
    return (
        <div>
            <div>
                <h2>Registration</h2>
            </div>
            <RegisterForm/>
            <div>
                <Link to={"/auth/login"}>Login</Link>
            </div>
        </div>
    )
}