import React from "react"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import "./App.scss"

import {Layout} from "./layout/Layout";
import {Messages, Profile, Settings} from "./pages";
import {Dialog} from "./pages/Messages/Dialog/Dialog";

function App(props) {
    return (<Router>
        <Routes>
            <Route path={"/"} element={<Layout/>}>
                <Route path={"settings"} element={<Settings
                />}/>
                <Route path={"profile"} element={<Profile
                    profile={props.state.profile}
                    dispatch={props.dispatch}
                />}/>
                <Route path={"messages"} element={<Messages
                    messages={props.state.messages}
                />}>
                    <Route path={":id"} element={<Dialog
                        messages={props.state.messages}
                        dispatch={props.dispatch}
                    />}/>
                    <Route path={""} element={<Dialog
                        messages={null}
                    />}/>
                </Route>
            </Route>
        </Routes>
    </Router>);
}

export default App;
