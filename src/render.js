import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import App from './App'
import {addMessage, addPost, updateNewMessageText, updateNewPostText} from "./redux/State";
const root = ReactDOM.createRoot(document.getElementById('root'));

export let rerenderEntireTree = (state) => {

    root.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} updateNewPostText ={updateNewPostText} addMessage={addMessage} updateNewMessageText={updateNewMessageText} />
        </React.StrictMode>);

};
