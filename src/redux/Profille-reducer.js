const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const profileReducer = (state, action) => {
    switch (action.type) {
        //Функция для добавления постов на страницу
        case ADD_POST:
            if (!state.newPostText || state.newPostText.length < 5) {
                alert('Пост должен быть минимум из 10 символов');
            } else {
                let newPost = {
                    id: 1,
                    //Получаем значение текста из state который обновляется при вводе любого символа в посте
                    message: state.newPostText,
                    likes_count: 0,
                };
                state.postsData.push(newPost);
                state.newPostText = '';
            }
            break
        //Функция для обновления текста в textarea в написании поста
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            break;
        default:
            return state;
    }
    return state;
}

export const addPostActionCreator = () => ({type: ADD_POST});

export const updateNewPostCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text});

export default profileReducer;