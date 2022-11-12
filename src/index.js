import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import './index.scss';
import App from './App';
import {state} from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App state={state}/>
  </React.StrictMode>
);

reportWebVitals();
