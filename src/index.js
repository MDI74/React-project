import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import App from './App'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root'));

let postsData =[
    {id:1, message:'hello', likescount:12},
    {id:2, message:'ko', likescount:4},
    {id:3, message:'second', likescount:11},
]

let dialogsData =
    [{id:1,name:'Dmitriy'},
    {id:2,name:'Sergey'},
    {id:3,name:'Katy'},
    {id:4,name:'Andrew'}
]

let messagesData=
    [{id:1, message:'hi'},
    {id:2, message:'efw'},
    {id:3, message:'gtrg'},
]

root.render(
  <React.StrictMode>
    <App postsData = {postsData} dialogsData={dialogsData} messagesData={messagesData} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
