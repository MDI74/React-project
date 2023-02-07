const ADD_FRIEND = "ADD-FRIEND";
const DEL_FRIEND = "DEL-FRIEND";
const SET_USERS = "SET-USERS";

//Создаем state с данными по умолчанию
let initialState = {
    users: []
}
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        //Функция добавления пользователя в друзья
        case ADD_FRIEND:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user;
                }),
            };
        //Функция удаления пользователя из друзей
        case DEL_FRIEND:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false};
                    }
                    return user;
                }),
            };
        //Функция для загрузки пользователей на страницу
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users],
            };
        default:
            return state;
    }
}

export const addFriendAC = (userId) => ({type: ADD_FRIEND, userId});

export const delFriendAC = (userId) => ({type: DEL_FRIEND, userId});

export const setUsers = (users) => ({type: SET_USERS, users});

export default usersReducer;