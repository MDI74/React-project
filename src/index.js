import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import App from './App'
import store from './redux/State'
const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <App state={state} addPost={store.addPost.bind(store)} updateNewPostText ={store.updateNewPostText.bind(store)} //bind() делает что this будет всегда store
                 addMessage={store.addMessage.bind(store)} updateNewMessageText={store.updateNewMessageText.bind(store)} />
        </React.StrictMode>);
};

rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);

