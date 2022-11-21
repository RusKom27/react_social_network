import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.scss';

import {store} from "./redux/state";
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const renderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <App state={state}
                 dispatch={store.dispatch.bind(store)}
            />
        </React.StrictMode>
    );
}
renderEntireTree(store.getState())

store.subscribe(renderEntireTree)

reportWebVitals();
