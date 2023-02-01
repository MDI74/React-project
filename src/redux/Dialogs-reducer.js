const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const dialogsReducer = (state, action) => {
    switch (action.type) {
        //Функция для добавления постов на страницу
        case ADD_MESSAGE:
            if (state.newMessageText) {
                let newMessage = {
                    id: 1,
                    //получаем значение текста из state который обновляется при вводе любого символа в чате
                    message: state.newMessageText,
                };
                state.messagesData.push(newMessage);
                state.newMessageText = '';
            }
        break;
        //Функция для обновления текста в textarea в чате
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
        break;
        default:
            return state;
    }
    return state
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});

export const updateNewMessageCreator = (text) =>
    ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text});

export default dialogsReducer;