import React from "react";
import "./Header.scss";
import logo from "../../images/header/logo.svg";

const Header = (props) => {
    return (
        <header className="header">
            <div className="header__container _container">
                <div className="header__content">
                    <a href="/profile" className="header__logo"><img src={logo} alt="Logo"/></a>
                    <a href="/profile" className="header__title">Социальная сеть</a>
                </div>
            </div>
        </header>
    )
}

export default Header;