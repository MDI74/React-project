import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import App from './App'
import store from './redux/Store'

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <App state={state} dispatch={store.dispatch.bind(store)}/>
        </React.StrictMode>);
};

rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);

