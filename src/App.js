import React from "react"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import "./App.scss"

import {Messages, Profile, Settings} from "./pages";
import {Dialog} from "./pages/Messages/Dialog/Dialog";
import {Layout} from "./layout/Layout";

function App() {
    return (
        <Router>
            <Routes>
                <Route path={"/"} element={<Layout/>}>
                    <Route path={"settings"} element={<Settings/>}/>
                    <Route path={"profile"} element={<Profile/>}/>
                    <Route path={"messages"} element={<Messages/>}>
                        <Route path={":dialog_id"} element={<Dialog/>}/>
                    </Route>
                </Route>
            </Routes>
        </Router>
    );
}

export default App;


