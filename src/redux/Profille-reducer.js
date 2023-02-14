const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

//Создаем state с данными по умолчанию
let initialState = {
    posts: [
        {id: 1, message: 'Hello', likes_count: 12},
        {id: 2, message: 'ko', likes_count: 4},
        {id: 3, message: 'second', likes_count: 11},
    ],
    newPostText: '',
}
const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        //Добавление постов на страницу
        case ADD_POST:
            if (!state.newPostText || state.newPostText.length < 5) {
                alert('Пост должен быть минимум из 5 символов');
            } else {
                let newPost = {
                    id: 1,
                    //Получаем значение текста из state который обновляется при вводе любого символа в посте
                    message: state.newPostText,
                    likes_count: 0,
                };
                //Создаем объект и копируем в него state, и сразу же возвращаем его
                return {
                    ...state,
                    newPostText: '',
                    //Копируем пост и добавляем новый в конец
                    posts: [...state.posts, newPost]
                };
            }
            break;
        //Обновление текста в textarea поста
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText,
            };
        default:
            return state;
    }
}

export const addPost = () => ({type: ADD_POST});

export const updateNewPostText = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text});

export default profileReducer;