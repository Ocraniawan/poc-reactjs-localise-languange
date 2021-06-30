import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './i18n'

ReactDOM.render(
    <React.StrictMode>
        <Suspense fallback={<div>Loading...</div>}>
            <App />
        </Suspense>
    </React.StrictMode>
    , document.getElementById("root"));

// https://dev.to/deadwing7x/setup-a-react-app-with-webpack-and-babel-4o3k