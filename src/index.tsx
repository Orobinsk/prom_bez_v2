import React from 'react';
import ReactDOM from 'react-dom/client';
import './app/styles/index.scss';

import App from "./app/App";
import {Provider} from "react-redux";
import {Store} from "./app/providers/Store";
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    // <Provider store={Store} >
    <BrowserRouter>
        <App />
    </BrowserRouter>
    // </Provider>
);

