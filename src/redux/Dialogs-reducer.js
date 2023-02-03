const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogsData: [
        {
            id: 1,
            name: 'Dmitriy',
            avatar: 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg',
            message: 'hello'
        },
        {
            id: 2,
            name: 'Sergey',
            avatar: 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg',
            message: 'hello how are you'
        },
        {
            id: 3,
            name: 'Katy',
            avatar: 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg',
            message: 'hello ergerg'
        },
        {
            id: 4,
            name: 'Andrew',
            avatar: 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg',
            message: 'hello ergerg'
        },
        {
            id: 2,
            name: 'Sergey',
            avatar: 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg',
            message: 'hello how are you'
        },
        {
            id: 3,
            name: 'Katy',
            avatar: 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg',
            message: 'hello ergerg'
        },
        {
            id: 4,
            name: 'Andrew',
            avatar: 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg',
            message: 'hello ergerg'
        },
        {
            id: 2,
            name: 'Sergey',
            avatar: 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg',
            message: 'hello how are you'
        },
        {
            id: 3,
            name: 'Katy',
            avatar: 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg',
            message: 'hello ergerg'
        },
        {
            id: 4,
            name: 'Andrew',
            avatar: 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg',
            message: 'hello ergerg'
        },
        {
            id: 2,
            name: 'Sergey',
            avatar: 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg',
            message: 'hello how are you'
        },
        {
            id: 3,
            name: 'Katy',
            avatar: 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg',
            message: 'hello ergerg'
        },
        {
            id: 4,
            name: 'Andrew',
            avatar: 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg',
            message: 'hello ergerg'
        },
        {
            id: 2,
            name: 'Sergey',
            avatar: 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg',
            message: 'hello how are you'
        },
        {
            id: 3,
            name: 'Katy',
            avatar: 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg',
            message: 'hello ergerg'
        },
        {
            id: 4,
            name: 'Andrew',
            avatar: 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg',
            message: 'hello ergerg'
        },

    ],
    messagesData: [
        {id: 1, message: 'Hello, how are you?'},
        {id: 2, message: 'br!'},
        {id: 3, message: 'HAH!'},
    ],
    newMessageText: '',
}
const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        //Добавления постов на страницу
        case ADD_MESSAGE:
            if (state.newMessageText) {
                let newMessage = {
                    id: 1,
                    //Получаем значение текста из state который обновляется при вводе любого символа в чате
                    message: state.newMessageText,
                };
                state.messagesData.push(newMessage);
                state.newMessageText = '';
            }
            break;
        //Обновление текста в textarea в чате
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