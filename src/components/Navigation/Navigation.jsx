import React from 'react';
import './Navigation.scss'

const Navigation = () =>{
    return(
      <nav className='nav'>
        <div className='nav__container'>
          <div className='nav__content'>
            <ul className='nav__list'>
              <li className='nav__item'>
                <a href='#' className='nav__link'>Профиль</a>
              </li>
              <li className='nav__item'>
                <a href='#' className='nav__link'>Сообщения</a>
              </li>
              <li className='nav__item'>
                <a href='#' className='nav__link'>Новости</a>
              </li>
              <li className='nav__item'>
                <a href='#' className='nav__link'>Музыка</a>
              </li>
              <li className='nav__item'>
                <a href='#' className='nav__link'>Настройки</a>
              </li>
            </ul>
          </div>
        </div>
    </nav>
    )
}

export default Navigation;