import React from "react";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/Profille-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {

    let state = props.store.getState().profile;

    //Функция для добавления постов на страницу profile
    const addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    //Функция для обновления textarea при вводе текста
    const updateNewPostText = (text) => {
        let action = updateNewPostActionCreator(text);
        props.store.dispatch(action);
    }

    return (
        <MyPosts updateNewPostText={updateNewPostText} addPost={addPost} postsData={state.postsData}
                 newPostText={state.newPostText}/>
    )
}
export default MyPostsContainer;