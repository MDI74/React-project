import {NavLink} from 'react-router-dom'
import './DialogItem.scss'
import React from 'react'

const DialogItem = (props) => {

    let path ="/dialogs/" + props.id;

    return (
        <NavLink to={path} className="item-dialog__body">
            <div className="item-dialog__image">
                <img src={props.avatar} alt="Avatar"/>
            </div>
            <p className="item-dialog__name">{props.name}</p>
        </NavLink>
    )
}

export default DialogItem;