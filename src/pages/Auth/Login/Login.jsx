import React from "react"
import styles from "./Login.module.scss"
import {Link, useNavigate} from "react-router-dom";
import {getUser} from "../../../packages/api/rest/user";
import {connect} from "react-redux";
import {loginUser} from "../../../redux/actions";

const Login = ({loginUser}) => {
    const navigate = useNavigate()
    const login = (event) => {
        event.preventDefault()
        getUser(event.target.email.value, event.target.password.value).then(user => {
            console.log(user)
            if (user) {
                loginUser(user.data)
                navigate("/profile")
            }
        }).catch(err => console.log(err))
    }

    return (
        <div className={styles.container}>
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
                    <input type="submit"/>
                </div>
            </form>


            <div><Link to={"/auth/register"}>Register</Link></div>
        </div>
    )
}


const mapStateToProps = () => ({})

export default connect(mapStateToProps, {loginUser})(Login)