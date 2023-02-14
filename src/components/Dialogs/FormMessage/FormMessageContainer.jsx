import {addMessage, updateNewMessageText} from "../../../redux/Dialogs-reducer";
import FormMessage from "./FormMessage";
import {connect} from "react-redux";

//Функция для передачи state
let mapStateToProps = (state) => {
    return {
        newMessageText: state.dialogsPage.newMessageText
    }
}

//Создаем контейнерную компоненту с помощью react-redux
export default connect(mapStateToProps, {addMessage, updateNewMessageText})(FormMessage);
