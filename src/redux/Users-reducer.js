const ADD_FRIEND = "ADD-FRIEND";
const DEL_FRIEND = "DEL-FRIEND";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

//Создаем state с данными по умолчанию
let initialState = {
    users: [],
    pageSize: 9,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
}
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        //Функция добавления пользователей в друзья
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
        //Функция удаления пользователей из друзей
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
                users: [...action.users],
            };
        //Функция для установки текущей страницы
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage,
            }
        //Функция для иницилизации количества пользователей
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalUsersCount,
            }
        //Функция для вкл/выкл эффекта загрузки
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching,
            }
        default:
            return state;
    }
}

export const addFriend = (userId) => ({type: ADD_FRIEND, userId});

export const delFriend = (userId) => ({type: DEL_FRIEND, userId});

export const setUsers = (users) => ({type: SET_USERS, users});

export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});

export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount});

export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});

export default usersReducer;