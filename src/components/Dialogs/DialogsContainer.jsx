import {connect} from "react-redux";
import Dialogs from "./Dialogs";

//Функция для передачи state
let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages
    }
}

//Создаем контейнерную компоненту с помощью react-redux
const DialogsContainer = connect(mapStateToProps, {})(Dialogs);
export default DialogsContainer;