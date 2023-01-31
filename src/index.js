import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import App from './App'
import state, {addMessage, addPost, subscribe, updateNewMessageText, updateNewPostText} from "./redux/State";
const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} updateNewPostText ={updateNewPostText} addMessage={addMessage} updateNewMessageText={updateNewMessageText} />
        </React.StrictMode>);
};

rerenderEntireTree(state);
subscribe(rerenderEntireTree)

