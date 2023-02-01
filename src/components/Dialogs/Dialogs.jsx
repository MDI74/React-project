import React from 'react'
import './Dialogs.scss'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import FormMessage from "./FormMessage/FormMessage"

const Dialogs = (props) => {

    let dialogsElement = props.state.dialogsData.map(dialog => <DialogItem id={dialog.id} name={dialog.name}
                                                                           avatar={dialog.avatar}/>);
    let messagesElement = props.state.messagesData.map(message => <Message id={message.id} message={message.message}/>);

    return (
        <section className="dialogs">
            <div className="dialogs__container">
                <div className="dialogs__content">
                    <div className="dialogs__items item-dialog">
                        <h4 className="item-dialog__title title-dialog">Диалоги</h4>
                        <div className="item-dialog__content">
                            {dialogsElement}
                        </div>
                    </div>
                    <div className="dialogs__messages message-item">
                        <h4 className="message-item__title title-dialog">Чат</h4>
                        <div className="message-item__content">
                            {messagesElement}
                        </div>
                        <FormMessage newMessageText={props.state.newMessageText} dispatch={props.dispatch}/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Dialogs;