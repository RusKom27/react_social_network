import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.scss';

import {store} from "./redux/redux-store";
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const renderEntireTree = (store) => {
    root.render(
        <React.StrictMode>
            <App store={store} />
        </React.StrictMode>
    );
}
renderEntireTree(store)

store.subscribe(() => renderEntireTree(store))

reportWebVitals();
