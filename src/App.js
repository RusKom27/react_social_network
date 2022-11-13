import React from "react"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import "./App.scss"

import {Layout} from "./layout/Layout";
import {Messages, Profile, Settings} from "./pages";
import {Dialog} from "./pages/Messages/Dialog/Dialog";

function App(props) {
    return (
        <Router>
                <Routes>
                    <Route path={"/"} element={<Layout/>}>
                        <Route path={"settings"} element={<Settings/>}/>
                        <Route path={"profile"} element={<Profile profile={props.state.profile}/>}/>
                        <Route path={"messages"} element={<Messages dialogs={props.state.dialogs}/>}>
                            <Route path={":id"} element={<Dialog dialogs={props.state.dialogs} addMessage={props.state.addMessage}/>}/>
                            <Route path={""} element={<Dialog dialogs={null} addMessage={null}/>}/>
                        </Route>
                    </Route>
                </Routes>
        </Router>
    );
}

export default App;
