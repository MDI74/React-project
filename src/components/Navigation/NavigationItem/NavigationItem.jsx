import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavigationItem.scss'

const NavigationItem = (props) =>{

    return(
        <ul className="nav__list">
            <li className="nav__item">
                <NavLink to={props.src} className="nav__link">{props.name}</NavLink>
            </li>
        </ul>
    )
}
export default NavigationItem;