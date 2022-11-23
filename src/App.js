import React from "react"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import "./App.scss"

import {Layout} from "./layout/Layout";
import {Messages, Profile, Settings} from "./pages";
import {Dialog} from "./pages/Messages/Dialog/Dialog";

function App({store}) {
    return (<Router>
        <Routes>
            <Route path={"/"} element={<Layout/>}>
                <Route path={"settings"} element={<Settings
                />}/>
                <Route path={"profile"} element={<Profile
                    store={store}
                />}/>
                <Route path={"messages"} element={<Messages
                    store={store}
                />}>
                    <Route path={":dialog_id"} element={<Dialog
                        store={store}
                    />}/>
                </Route>
            </Route>
        </Routes>
    </Router>);
}

export default App;
