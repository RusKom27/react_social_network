import React from "react"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import "./App.scss"

import {Messages, Profile, Settings} from "./pages";
import {Dialog} from "./pages/Messages/Dialog/Dialog";
import {Layout} from "./layout/Layout";
import {useSelector} from "react-redux";
import {Auth} from "./pages/Auth/Auth";
import Login from "./pages/Auth/Login/Login";
import Register from "./pages/Auth/Register/Register";

function App() {
    const token = useSelector(state => state.auth.token)
    return (
        <Router>
            <Routes>
                <Route path={"/"} element={<Layout/>}>
                    {!token && <Route path={"auth"} element={<Auth/>}>
                        <Route path={"login"} element={<Login/>}/>
                        <Route path={"register"} element={<Register/>}/>
                    </Route>}
                    {token && <Route path={"settings"} element={<Settings/>}/>}
                    {token && <Route path={"profile"} element={<Profile/>}/>}
                    {token && <Route path={"messages"} element={<Messages/>}>
                        <Route path={":dialog_id"} element={<Dialog/>}/>
                    </Route>}
                </Route>
            </Routes>
        </Router>
    );
}

export default App;


