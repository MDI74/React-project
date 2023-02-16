import React from "react";
import "./Dialogs.scss";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import FormMessageContainer from "./FormMessage/FormMessageContainer";

const Dialogs = (props) => {

    //Список элементов пользователей в диалогах
    let dialogsElement = props.dialogs.map(dialog => <DialogItem key={dialog.id} id={dialog.id} name={dialog.name}
                                                                 avatar={dialog.avatar} message={dialog.message}/>);
    //Список элементов сообщений в чате
    let messagesElement = props.messages.map(message => <Message key={message.id} id={message.id}
                                                                 message={message.message}/>);

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
                        <FormMessageContainer/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Dialogs;