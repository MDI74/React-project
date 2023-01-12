import React from 'react';
import './Header.scss';

const Header = () =>{
    return(
        <header className='header'>
            <div className='header__container'>
                <div className='header__content'>
                    <a href='#' className='header__logo'><img src='https://e7.pngegg.com/pngimages/41/701/png-clipart-logo-graphic-design-graphy-grapher-logo-graphy-angle-text.png' /></a>
                    <a href='#'className='header__title'>Социальная сеть</a>
                </div>
            </div>
      </header>
    )
}

export default Header;