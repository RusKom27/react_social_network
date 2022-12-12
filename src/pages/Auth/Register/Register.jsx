import React from "react"
import styles from "./Register.module.scss"
import {Link, useNavigate} from "react-router-dom";
import {connect} from "react-redux";
import {Button} from "../../../components";
import {createUser} from "../../../redux/thunk/user";

const Register = ({createUser}) => {
    const navigate = useNavigate()
    const register = (event) => {
        event.preventDefault()
        createUser(
            event.target.name.value,
            event.target.login.value,
            event.target.email.value,
            event.target.password.value,
            user => navigate(`/profile/${user.login}`)
        )
    }
    return (
        <div className={styles.container}>
            <div><h2>Registration</h2></div>
            <form onSubmit={register}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input id="name" type="name" name="name"/>
                </div>
                <div>
                    <label htmlFor="login">Login</label>
                    <input id="login" type="login" name="login"/>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" name="email"/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" name="password"/>
                </div>
                <div>
                    <Button type={"submit"}>Register</Button>
                </div>
            </form>


            <div><Link to={"/auth/login"}>Login</Link></div>
        </div>
    )
}


const mapStateToProps = () => ({})

export default connect(mapStateToProps, {createUser})(Register)