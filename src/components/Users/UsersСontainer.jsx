import React from "react";
import Preloader from "../Preloader/Preloader";
import {connect} from "react-redux";
import {
    addFriendAC,
    delFriendAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    toggleIsFetchingAC
} from "../../redux/Users-reducer";
import axios from "axios";
import Users from "./Users";

class UsersСontainer extends React.Component {

    //Вызывается после рендеринга компонента
    componentDidMount() {

        //Подгружаем данные из api
        if (this.props.users.length === 0) {
            this.props.toggleIsFetching(true);
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            })
        }
    }

    //Метод для изменения страницы
    onPageChanged = (page) => {
        this.props.setCurrentPage(page);
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items)
        })
    }

    render() {

        return (
            <>
                {this.props.isFetching ? <Preloader/> : null }
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
        //Функция для установки числа пользователей в переменную totalUsersCount страницы
        setTotalUsersCount: (totalUsersCount) => {
            dispatch(setTotalUsersCountAC(totalUsersCount));
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingAC(isFetching))
        }
    }
}

//Создаем контейнерную компоненту с помощью react-redux
export default connect(mapStateToProps, mapDispatchToProps)(UsersСontainer);