import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.scss';

import {store} from "./redux/store";
import {App} from './App';
import {Provider} from "react-redux";
import {PostAPI} from "./packages/api/rest/post";

window.addEventListener("beforeunload", function (e) {
   PostAPI.getPosts()
})

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);

reportWebVitals();
