import {connect} from "react-redux";
import Users from "./Users";
import {addFriendAC, delFriendAC, setUsers} from "../../redux/Users-reducer";

//Функция для передачи state
let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
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
            dispatch(setUsers(users));
        }
    }
}

//Создаем контейнерную компоненту с помощью react-redux
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UsersContainer;