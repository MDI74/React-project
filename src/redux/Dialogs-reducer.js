const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogs: [
        {
            id: 1,
            name: 'Дмитрий',
            avatar: 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg',
            message: 'Привет!'
        },
        {
            id: 2,
            name: 'Сергей',
            avatar: 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg',
            message: 'Как дела?'
        },
        {
            id: 3,
            name: 'Катя',
            avatar: 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg',
            message: 'пварв'
        },
        {
            id: 4,
            name: 'Андрей',
            avatar: 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg',
            message: 'укпук'
        },
        {
            id: 1,
            name: 'Дмитрий',
            avatar: 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg',
            message: 'Привет!'
        },
        {
            id: 2,
            name: 'Сергей',
            avatar: 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg',
            message: 'Как дела?'
        },
        {
            id: 3,
            name: 'Катя',
            avatar: 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg',
            message: 'пварв'
        },
        {
            id: 4,
            name: 'Андрей',
            avatar: 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg',
            message: 'укпук'
        },
        {
            id: 1,
            name: 'Дмитрий',
            avatar: 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg',
            message: 'Привет!'
        },
        {
            id: 2,
            name: 'Сергей',
            avatar: 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg',
            message: 'Как дела?'
        },
        {
            id: 3,
            name: 'Катя',
            avatar: 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg',
            message: 'пварв'
        },
        {
            id: 4,
            name: 'Андрей',
            avatar: 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg',
            message: 'укпук'
        },
    ],
    messages: [
        {id: 1, message: 'Привет, как дела?'},
        {id: 2, message: 'br!'},
        {id: 3, message: 'HAH!'},
    ],
    newMessageText: '',
}
const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        //Добавления сообщений в чат
        case ADD_MESSAGE:
            if (state.newMessageText) {
                let newMessage = {
                    id: 1,
                    //Получаем значение текста из state который обновляется при вводе любого символа в чате
                    message: state.newMessageText,
                };
                //Создаем объект и копируем в него state, и сразу же  возвращаем его
                return {
                    ...state,
                    newMessageText: '',
                    //Копируем сообщения и добавляем новое в конец
                    messages: [...state.messages, newMessage],
                };
            }
            break;
        //Обновление текста в textarea чата
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newText,
            };
        default:
            return state;
    }
    return state;
}

export const addMessage = () => ({type: ADD_MESSAGE});

export const updateNewMessageText = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text});

export default dialogsReducer;