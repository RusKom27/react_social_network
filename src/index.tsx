import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    QueryClient,
    QueryClientProvider
} from '@tanstack/react-query'


import reportWebVitals from './reportWebVitals';
import './index.scss';

import {setupStore} from "./redux/store";
import {App} from './App';
import {Provider} from "react-redux";

const store = setupStore()
const queryClient = new QueryClient()
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement);

root.render(
    <QueryClientProvider client={queryClient}>
        <Provider store={store}>
            <App/>
        </Provider>
    </QueryClientProvider>
);

reportWebVitals();
