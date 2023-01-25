import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.scss'

const Navigation = () =>{
    return(
      <nav className="nav">
        <div className="nav__container">
          <div className="nav__content">
            <ul className="nav__list">
              <li className="nav__item">
                <NavLink to="/profile" className="nav__link">Профиль</NavLink>
              </li>
              <li className="nav__item">
                <NavLink to="/dialogs" className="nav__link">Сообщения</NavLink>
              </li>
              <li className="nav__item">
                <NavLink to="/news" className="nav__link">Новости</NavLink>
              </li>
              <li className="nav__item">
                <NavLink to="/music" className="nav__link">Музыка</NavLink>
              </li>
              <li className="nav__item">
                <NavLink to="/settings" className="nav__link">Настройки</NavLink>
              </li>
            </ul>
          </div>
        </div>
    </nav>
    )
}

export default Navigation;