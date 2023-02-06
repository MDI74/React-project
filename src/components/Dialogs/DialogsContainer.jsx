import {connect} from "react-redux";
import Dialogs from "./Dialogs";

//Функция для передачи state
let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages
    }
}
//Функция для передачи dispatch
let mapDispatchToProps = (dispatch) => {
    return {}
}

//Создаем контейнерную компоненту с помощью react-redux

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;