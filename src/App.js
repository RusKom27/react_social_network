import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import "./App.scss"

import {Layout} from "./layout/Layout";
import {Messages, Profile, Settings} from "./pages";

function App(props) {

    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path={"/settings/*"} element={<Settings/>}/>
                    <Route path={"/profile/*"} element={<Profile profile={props.state.profile}/>}/>
                    <Route path={"/messages/*"} element={<Messages dialogs={props.state.dialogs}/>}/>
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
