import {NavLink} from 'react-router-dom'
import './DialogItem.scss'
import React from 'react'

const DialogItem = (props) => {
    let path ="/dialogs/" + props.id
    return (
        <div className="item-dialog__content">
            <NavLink to={path} className="item-dialog__body">
                <p className="item-dialog__name">{props.name}</p>
            </NavLink>
        </div>
    )
}

export default DialogItem;