import React from "react";
import "./Header.scss";
import Header from "./Header";
import axios from "axios";
import {setAuthUserData} from "../../redux/auth-reducer";
import {connect} from "react-redux";

class HeaderContainer extends React.Component {
    componentDidMount() {
        //Подгружаем данные авторизованного пользователя из api
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{
            withCredentials: true
        }).then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data;
                this.props.setAuthUserData(id, email, login);
            }
        })
    }

    render() {
        return (
            <Header {...this.props} />
        )
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});
export default connect(mapStateToProps, {setAuthUserData}) (HeaderContainer);