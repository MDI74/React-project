import React from 'react';
import './Navigation.scss'

const Navigation = () =>{
    return(
      <nav className='nav'>
        <div className='nav__container'>
          <div className='nav__content'>
            <ul className='nav__list'>
              <li className='nav__item'>
                <a href='#' className='nav__link'>Profile</a>
              </li>
              <li className='nav__item'>
                <a href='#' className='nav__link'>Messages</a>
              </li>
              <li className='nav__item'>
                <a href='#' className='nav__link'>News</a>
              </li>
              <li className='nav__item'>
                <a href='#' className='nav__link'>Music</a>
              </li>
              <li className='nav__item'>
                <a href='#' className='nav__link'>Settings</a>
              </li>
            </ul>
          </div>
        </div>
    </nav>
    )
}

export default Navigation;