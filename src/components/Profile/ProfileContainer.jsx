import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {setUserProfile, toggleIsFetching} from "../../redux/Profille-reducer";
import {connect} from "react-redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        //Включаем визуальный эффект загрузки
        this.props.toggleIsFetching(true);
        //Подгружаем данные пользователей из api
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            //Отключаем визуальный эффект загрузки
            this.props.toggleIsFetching(false);
            //Выводим пользователей на страницу
            this.props.setUserProfile(response.data);
        })
    }

    render() {
        return (
           <Profile {...this.props} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
}

export default connect(mapStateToProps, {setUserProfile,toggleIsFetching })(ProfileContainer);