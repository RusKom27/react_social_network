import React from "react"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import "./App.scss"

import {Feed, Messages, Profile, Settings} from "./pages";
import Dialog from "./pages/Messages/Dialog/Dialog";
import {Layout} from "./layout/Layout";
import {connect, useSelector} from "react-redux";
import {Auth} from "./pages/Auth/Auth";
import Login from "./pages/Auth/Login/Login";
import Register from "./pages/Auth/Register/Register";
import {getUserByToken} from "./packages/api/rest/user";
import {loginUser, toggleMenuTab} from "./redux/actions";

function App({loginUser}) {
    const token = useSelector(state => state.auth.token)
    if (token)
        getUserByToken().then(user => {
            loginUser(user.data)
        })

    return (
        <Router>
            <Routes>
                <Route path={"/"} element={<Layout/>}>
                    {!token && <Route path={"auth"} element={<Auth/>}>
                        <Route path={"login"} element={<Login/>}/>
                        <Route path={"register"} element={<Register/>}/>
                    </Route>}
                    {token && <Route path={"/"} element={<Feed/>}/>}
                    {token && <Route path={"profile/:login"} element={<Profile/>}/>}
                    {token && <Route path={"settings"} element={<Settings/>}/>}
                    {token && <Route path={"messages"} element={<Messages/>}>
                        <Route path={":dialog_id"} element={<Dialog/>}/>
                    </Route>}
                </Route>
            </Routes>
        </Router>
    );
}

const mapStateToProps = () => ({})

export default connect(mapStateToProps, {loginUser})(App)


