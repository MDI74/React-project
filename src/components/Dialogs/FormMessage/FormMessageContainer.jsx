import React from "react";
import {addMessageActionCreator, updateNewMessageCreator} from "../../../redux/Dialogs-reducer";
import FormMessage from "./FormMessage";

const FormMessageContainer = (props) => {

    let state = props.store.getState().dialogs;

    //Функция для добавления сообщений на страницу profile
    const addMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    }

    //Функция для обновления textarea при вводе текста
    const updateNewMessageText = (text) => {
        let action = updateNewMessageCreator(text);
        props.store.dispatch(action);
    }

    return (
        <FormMessage addMessage={addMessage} updateNewMessageText={updateNewMessageText}
                     newMessageText={state.newMessageText}/>
    )
}
export default FormMessageContainer;