import React from 'react'
import './Dialogs.scss'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

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