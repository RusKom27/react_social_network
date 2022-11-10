import {Layout} from "./layout/Layout";
import "./App.scss"
import {Settings} from "./pages/Settings/Settings";
import {Profile} from "./pages/Profile/Profile";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import {Messages} from "./pages/Messages/Messages";

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
