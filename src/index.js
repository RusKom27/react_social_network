import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    QueryClient,
    QueryClientProvider
} from '@tanstack/react-query'


import reportWebVitals from './reportWebVitals';
import './index.scss';

import {store} from "./redux/store";
import {App} from './App';
import {Provider} from "react-redux";

const queryClient = new QueryClient()
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    // <React.StrictMode>
    <QueryClientProvider client={queryClient}>
        <Provider store={store}>
            <App/>
        </Provider>
    </QueryClientProvider>
    // </React.StrictMode>
);

reportWebVitals();
