import {Link} from "react-router-dom";
import {connect} from "react-redux";

import {createUser} from "../../../redux/thunk";
import {RegisterForm} from "../../../forms/RegisterForm";

import styles from "./Register.module.scss"

const Register = ({createUser}) => {
    return (
        <div>
            <div>
                <h2>Registration</h2>
            </div>
            <RegisterForm createUser={createUser}/>
            <div>
                <Link to={"/auth/login"}>Login</Link>
            </div>
        </div>
    )
}

const mapStateToProps = () => ({})

export default connect(mapStateToProps, {createUser})(Register)