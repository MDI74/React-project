import {connect} from "react-redux";
import Users from "./Users";
import {addFriendAC, delFriendAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC} from "../../redux/Users-reducer";

//Функция для передачи state
let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    }
}
//Функция для передачи dispatch
let mapDispatchToProps = (dispatch) => {
    return {
        //Функция для добавления друзей
        addFriend: (userId) => {
            dispatch(addFriendAC(userId));
        },
        //Функция для удаления друзей
        delFriend: (userId) => {
            dispatch(delFriendAC(userId));
        },
        //Функция для загрузки пользователей
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        //Функция для изменения страницы
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage));
        },
        //Функция для изменения страницы
        setTotalUsersCount: (totalUsersCount) => {
            dispatch(setTotalUsersCountAC(totalUsersCount));
        }
    }
}

//Создаем контейнерную компоненту с помощью react-redux
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UsersContainer;