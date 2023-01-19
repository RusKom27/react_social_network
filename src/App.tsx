import React from "react"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import {Account, Auth, Dialog, Feed, Login, Messages, Profile, Register, Security, Settings} from "./pages";
import {Layout} from "./layout/Layout";
import {AccountsSearchResults, Redirect, TopicSearchResults} from "./components";

import "./App.scss"
import {useAppSelector} from "./hooks/redux";

export const App = () => {
    const token = useAppSelector(state => state.auth.token)

    return (
        <Router>
            <Routes>
                <Route path={"/"} element={<Layout/>}>
                    {!token && <Route path={"auth"} element={<Auth/>}>
                        <Route path={"login"} element={<Login/>}/>
                        <Route path={"register"} element={<Register/>}/>
                    </Route>}
                    {token && <Route path={"/"} element={<Feed/>}/>}
                    {token && <Route path={"profile/:login"} element={<Profile/>}/>}
                    {token && <Route path={"settings"} element={<Settings/>}>
                        <Route path={"account"} element={<Account/>}/>
                        <Route path={"security"} element={<Security/>}/>
                    </Route>}
                    {token && <Route path={"messages"} element={<Messages/>}>
                        <Route path={":dialog_id"} element={<Dialog/>}/>
                    </Route>}
                    {token && <Route path={"search_results/topics"} element={<TopicSearchResults/>}/>}
                    {token && <Route path={"search_results/accounts"} element={<AccountsSearchResults/>}/>}
                </Route>
                <Route path={"*"} element={<Redirect/>}/>
            </Routes>
        </Router>
    );
}




