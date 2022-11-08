import {Layout} from "./Layout/Layout";
import {Settings} from "./components/Settings/Settings";
import {Profile} from "./components/Profile/Profile";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import {Messages} from "./components/Messages/Messages";

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path={"/settings"} element={<Settings />}/>
                    <Route path={"/profile"} element={<Profile />}/>
                    <Route path={"/messages"} element={<Messages />}/>
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
