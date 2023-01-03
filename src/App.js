import React, {useEffect} from "react"
import {BrowserRouter as Router, Route, Routes, useNavigate} from "react-router-dom";
import {connect, useSelector} from "react-redux";

import {Account, Auth, Dialog, Feed, Login, Messages, Profile, Register, Security, Settings} from "./pages";
import {authUserByToken, getMessages, initializeApp} from "./redux/thunk";
import Layout from "./layout/Layout";
import {Redirect} from "./components";

import "./App.scss"

export const App = () => {
    const token = useSelector(state => state.auth.token)

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
                    {token && <Route path={"settings"} element={<Settings/>}>
                        <Route path={"account"} element={<Account/>}/>
                        <Route path={"security"} element={<Security/>}/>
                    </Route>}
                    {token && <Route path={"messages"} element={<Messages/>}>
                        <Route path={":dialog_id"} element={<Dialog/>}/>
                    </Route>}
                </Route>
                <Route path={"*"} element={<Redirect/>}/>
            </Routes>
        </Router>
    );
}




