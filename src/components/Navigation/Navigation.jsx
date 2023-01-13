import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.scss'

const Navigation = () =>{
    return(
      <nav className='nav'>
        <div className='nav__container'>
          <div className='nav__content'>
            <ul className='nav__list'>
              <li className='nav__item'>
                <Link to='/profile' className='nav__link'>Профиль</Link>
              </li>
              <li className='nav__item'>
                <Link to='/dialogs' className='nav__link'>Сообщения</Link>
              </li>
              <li className='nav__item'>
                <Link to='/news' className='nav__link'>Новости</Link>
              </li>
              <li className='nav__item'>
                <Link to='/music' className='nav__link'>Музыка</Link>
              </li>
              <li className='nav__item'>
                <Link to='/settings' className='nav__link'>Настройки</Link>
              </li>
            </ul>
          </div>
        </div>
    </nav>
    )
}

export default Navigation;