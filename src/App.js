import React from "react"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import "./App.scss"

import {Messages, Profile, Settings} from "./pages";
import {Dialog} from "./pages/Messages/Dialog/Dialog";
import {LayoutContainer} from "./layout/LayoutContainer";
import ApiTokenHandler from "./packages/api/ApiTokenHandler";

function App() {
    return (
        <Router>
            <ApiTokenHandler/>
            <Routes>
                <Route path={"/"} element={<LayoutContainer/>}>
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


