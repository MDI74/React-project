const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let store = {
    _state: {
        profile: {
            postsData: [
                {id: 1, message: 'Hello', likes_count: 12},
                {id: 2, message: 'ko', likes_count: 4},
                {id: 3, message: 'second', likes_count: 11},
            ],
            newPostText: '',
        },
        dialogs: {
            dialogsData: [
                {id: 1, name: 'Dmitriy', avatar: 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg'},
                {id: 2, name: 'Sergey', avatar: 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg'},
                {id: 3, name: 'Katy', avatar: 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg'},
                {id: 4, name: 'Andrew', avatar: 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg'},
                {id: 1, name: 'Dmitriy', avatar: 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg'},
                {id: 2, name: 'Sergey', avatar: 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg'},
                {id: 3, name: 'Katy', avatar: 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg'},
                {id: 3, name: 'Katy', avatar: 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg'},
                {id: 4, name: 'Andrew', avatar: 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg'},
                {id: 1, name: 'Dmitriy', avatar: 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg'},
                {id: 2, name: 'Sergey', avatar: 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg'},
                {id: 3, name: 'Katy', avatar: 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg'},
            ],
            messagesData: [
                {id: 1, message: 'Hello, how are you?'},
                {id: 2, message: 'brrrrr!'},
                {id: 3, message: 'HAHAHAH!'},
            ],
            newMessageText: '',
        },
        navigation: {
            friendsData: [
                {id: 1, name: 'Dmitriy', avatar: 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg'},
                {id: 2, name: 'Sergey', avatar: 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg'},
                {id: 3, name: 'Katy', avatar: 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg'},
                {id: 4, name: 'Andrew', avatar: 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg'},
            ]
        }
    },
    _callSubscriber() {
        console.log("State changes");
    },
    //Функция для добавления собщений в чат
    _addMessage() {
        if (this._state.dialogs.newMessageText) {
            let newMessage = {
                id: 1,
                //получаем значение текста из state который обновляется при вводе любого символа в чате
                message: this._state.dialogs.newMessageText,
            };
            this._state.dialogs.messagesData.push(newMessage);
            this._state.dialogs.newMessageText = '';
        }
        this._callSubscriber(this._state);
    },
    //Функция для обновления текста в textarea в чате
    _updateNewMessageText(newText) {
        this._state.dialogs.newMessageText = newText;
        this._callSubscriber(this._state);
    },
    //Функция для добавления постов на страницу
    _addPost() {
        if (this._state.profile.newPostText || this._state.profile.newPostText.length < 10) {
            alert('Пост должен быть минимум из 10 символов');
        } else {
            let newPost = {
                id: 1,
                //Получаем значение текста из state который обновляется при вводе любого символа в посте
                message: this._state.profile.newPostText,
                likes_count: 0,
            };
            this._state.profile.postsData.push(newPost);
            this._state.profile.newPostText = '';
        }
        this._callSubscriber(this._state);
    },
    //Функция для обновления текста в textarea в написании поста
    _updateNewPostText(newText) {
        this._state.profile.newPostText = newText;
        this._callSubscriber(this._state);
    },
    //Фукнция для получения state
    getState() {
        return this._state;
    },
    //Фукнция для перерисовки страницы
    subscribe(observer) {
        this._callSubscriber = observer; // Наблюдатель паттерн
    },
    //Функция которая принимает action и вызывает необходимую функцию
    dispatch(action) {
        if (action.type === ADD_MESSAGE) {
            this._addMessage();
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._updateNewMessageText(action.newText)
        } else if (action.type === ADD_POST) {
            this._addPost();
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._updateNewPostText(action.newText);
        }
    },
}

//Создание action объектов
export const addPostActionCreator = () => ({type: ADD_POST});

export const updateNewPostCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text});

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});

export const updateNewMessageCreator = (text) =>
    ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text});

export default store;