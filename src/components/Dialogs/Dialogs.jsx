import React from 'react'
import './Dialogs.scss'
import {NavLink} from "react-router-dom"

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
const Message = (props) =>{
    return (
        <div className="message-item__content">
            <div className="message-item__body">
                <p>{props.message}</p>
            </div>
        </div>
    )
}
const Dialogs = (props) => {
    return (
        <section className="dialogs">
            <div className="dialogs__container">
                <div className="dialogs__content">
                    <div className="dialogs__items item-dialog">
                        <h4 className="item-dialog__title title-dialog">Диалоги</h4>
                        <DialogItem name="Dima" id="1"/>
                        <DialogItem name="Sergey" id="2"/>
                        <DialogItem name="Katy" id="3"/>
                    </div>
                    <div className="dialogs__messages message-item">
                        <h4 className="message-item__title title-dialog">Чат</h4>
                        <Message message="hi" />
                        <Message message="hi" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Dialogs;