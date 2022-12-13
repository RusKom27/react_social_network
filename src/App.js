import React from "react"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {useSelector} from "react-redux";

import {Feed, Messages, Dialog, Profile, Settings} from "./pages";
import Layout from "./layout/Layout";
import {Auth, Login, Register} from "./pages";
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
                    {token && <Route path={"settings"} element={<Settings/>}/>}
                    {token && <Route path={"messages"} element={<Messages/>}>
                        <Route path={":dialog_id"} element={<Dialog/>}/>
                    </Route>}
                </Route>
                <Route path={"*"} element={<Redirect/>}/>
            </Routes>
        </Router>
    );
}


