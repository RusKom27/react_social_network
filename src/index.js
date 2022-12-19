import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.scss';

import {store} from "./redux/store";
import {App} from './App';
import {Provider} from "react-redux";

import { configureAbly } from "@ably-labs/react-hooks";

configureAbly({ key: process.env.REACT_APP_ABLY_API_KEY});
//
// window.addEventListener("beforeunload", function (e) {
//    PostAPI.getPosts()
// })

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);

reportWebVitals();
