import React from "react";
import Preloader from "../Preloader/Preloader";
import {connect} from "react-redux";
import {
    addFriend, delFriend, setCurrentPage,
    setTotalUsersCount, setUsers, toggleIsFetching
} from "../../redux/Users-reducer";
import Users from "./Users";
import {usersAPI} from "../../api/api";

class UsersContainer extends React.Component {
    //Вызывается после рендеринга компоненты
    componentDidMount() {
        if (this.props.users.length === 0) {
            //Включаем визуальный эффект загрузки
            this.props.toggleIsFetching(true);

            //Подгружаем данные пользователей из api
            usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
                //Отключаем визуальный эффект загрузки
                this.props.toggleIsFetching(false);
                //Выводим пользователей на страницу
                this.props.setUsers(data.items);
                //Инициализируем количество пользователей
                this.props.setTotalUsersCount(data.totalCount);
            })
        }
    }

    //Метод для изменения страницы
    onPageChanged = (page) => {
        //Устанавливаем значение текущей страницы
        this.props.setCurrentPage(page);
        this.props.toggleIsFetching(true);

        usersAPI.getUsers(page, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
        })
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage} onPageChanged={this.onPageChanged} users={this.props.users}
                       addFriend={this.props.addFriend} delFriend={this.props.delFriend}/>
            </>
        )
    }
}

//Функция для передачи state
let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

//Функция для передачи dispatch
let mapDispatchToProps = (dispatch) => {
    return {
        //Колбэк функция для добавления друзей
        addFriend: (userId) => {
            dispatch(addFriend(userId));
        },
        //Колбэк функция для удаления друзей
        delFriend: (userId) => {
            dispatch(delFriend(userId));
        },
        //Колбэк функция для загрузки пользователей
        setUsers: (users) => {
            dispatch(setUsers(users));
        },
        //Колбэк функция для изменения страницы
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPage(currentPage));
        },
        //Колбэк функция для установки числа пользователей в переменную totalUsersCount страницы
        setTotalUsersCount: (totalUsersCount) => {
            dispatch(setTotalUsersCount(totalUsersCount));
        },
        //Колбэк функция для вкл/выкл эффекта загрузки
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetching(isFetching));
        }
    }
}

//Создаем контейнерную компоненту с помощью react-redux
export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);