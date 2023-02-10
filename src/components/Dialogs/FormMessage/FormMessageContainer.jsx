import {addMessageActionCreator, updateNewMessageCreator} from "../../../redux/Dialogs-reducer";
import FormMessage from "./FormMessage";
import {connect} from "react-redux";

//Функция для передачи state
let mapStateToProps = (state) => {
    return {
        newMessageText: state.dialogsPage.newMessageText
    }
}
//Функция для передачи dispatch
let mapDispatchToProps = (dispatch) => {
    return {
        //Колбэк функция для добавления сообщений на страницу profile
        addMessage: () => {
            dispatch(addMessageActionCreator());
        },
        //Колбэк функция для обновления textarea при вводе текста
        updateNewMessageText: (text) => {
            dispatch(updateNewMessageCreator(text));
        }
    }
}

//Создаем контейнерную компоненту с помощью react-redux
const FormMessageContainer = connect(mapStateToProps, mapDispatchToProps)(FormMessage);
export default FormMessageContainer;