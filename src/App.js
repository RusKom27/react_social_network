import React from "react"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {useSelector} from "react-redux";

import "./App.scss"

import {Feed, Messages, Profile, Settings} from "./pages";
import Dialog from "./pages/Messages/Dialog/Dialog";
import Layout from "./layout/Layout";
import {Auth} from "./pages/Auth/Auth";
import Login from "./pages/Auth/Login/Login";
import Register from "./pages/Auth/Register/Register";

export function App() {
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
            </Routes>
        </Router>
    );
}


