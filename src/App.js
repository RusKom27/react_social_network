import {Layout} from "./Layout/Layout";
import {Settings} from "./components/Settings/Settings";
import {Profile} from "./components/Profile/Profile";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path={"/settings"} element={<Settings />}/>
                    <Route path={"/profile"} element={<Profile />}/>
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
