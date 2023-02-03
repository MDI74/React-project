import {addMessageActionCreator, updateNewMessageCreator} from "../../../redux/Dialogs-reducer";
import FormMessage from "./FormMessage";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        newMessageText: state.dialogs.newMessageText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        //Функция для добавления сообщений на страницу profile
        addMessage: () => {
            dispatch(addMessageActionCreator());
        },
        //Функция для обновления textarea при вводе текста
        updateNewMessageText: (text) => {
            dispatch(updateNewMessageCreator(text));
        }
    }
}

//Создаем контейнерную компоненту с помощью react-redux
const FormMessageContainer = connect(mapStateToProps, mapDispatchToProps)(FormMessage);
export default FormMessageContainer;