import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {setUserProfile,toggleIsFetching} from "../../redux/Profille-reducer";
import {connect} from "react-redux";
import {useParams} from 'react-router-dom';


export function withRouter(Component) {

    return (props) => {
        let params = useParams();
        return <Component {...props} router={{params}}/>
    }
}

class ProfileContainer extends React.Component {

    //Вызывается после рендеринга компоненты
    componentDidMount() {
        let profileId = this.props.router.params.profileId;
        if (!profileId) {
            profileId = 2;
        }

        //Включаем визуальный эффект загрузки
        this.props.toggleIsFetching(true);
        //Подгружаем данные пользователей для профиля из api
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + profileId).then(response => {
            //Отключаем визуальный эффект загрузки
            this.props.toggleIsFetching(false);
            //Выводим профиль пользователя на страницу на страницу
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

export default connect(mapStateToProps, {setUserProfile, toggleIsFetching})(withRouter(ProfileContainer));