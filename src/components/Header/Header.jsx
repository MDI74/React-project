import React from 'react'
import './Header.scss'
import logo  from '../../images/header/logo.svg'

const Header = () =>{
    return(
        <header className="header">
            <div className="header__container">
                <div className="header__content">
                    <a href="#" className="header__logo"><img src={logo}  alt='Логотип'/></a>
                    <a href="#" className="header__title">Социальная сеть</a>
                </div>
            </div>
      </header>
    )
}

export default Header;