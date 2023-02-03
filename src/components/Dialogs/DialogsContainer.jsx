import {connect} from "react-redux";
import Dialogs from "./Dialogs";

//Функция для передачи state
let mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogs.dialogsData,
        messagesData: state.dialogs.messagesData
    }
}
//Функция для передачи dispatch
let mapDispatchToProps = (dispatch) => {
    return {}
}

//Создаем контейнерную компоненту с помощью react-redux

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);
export default DialogsContainer;