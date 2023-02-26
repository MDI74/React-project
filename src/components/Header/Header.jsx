import React from "react";
import "./Header.scss";
import logo from "../../images/header/logo.svg";
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className="header">
            <div className="header__container _container">
                <div className="header__content">
                    <a href="/profile" className="header__logo"><img src={logo} alt="Logo"/></a>
                    <a href="/profile" className="header__title">Социальная сеть</a>
                    <div className="header__auth">
                        {props.isAuth ? props.login : <NavLink to={'/profile'} className="login">Войти</NavLink>}
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;