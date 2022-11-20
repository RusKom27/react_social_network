import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.scss';

import {state, subscribe} from "./redux/state";
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const renderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <App state={state}/>
        </React.StrictMode>
    );
}
renderEntireTree(state)

subscribe(renderEntireTree)

reportWebVitals();
