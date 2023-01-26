import React from 'react'
import './Dialogs.scss'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

const Dialogs = (props) => {

    let dialogsData =
        [{id:1,name:"Dmitriy"},
        {id:2,name:"Sergey"},
        {id:3,name:"Katy"},
        {id:4,name:"Andrew"}
    ]

    let messagesData=
        [{id:1, message:"hi"},
            {id:2, message:"efw"},
            {id:3, message:"gtrg"},
        ]

    let dialogsElement = dialogsData.map(dialog => <DialogItem id={dialog.id} name={dialog.name} />);
    let messagesElement = messagesData.map(message => <Message id={message.id} message={message.message} />);


    return (
        <section className="dialogs">
            <div className="dialogs__container">
                <div className="dialogs__content">
                    <div className="dialogs__items item-dialog">
                        <h4 className="item-dialog__title title-dialog">Диалоги</h4>
                        {dialogsElement}
                    </div>
                    <div className="dialogs__messages message-item">
                        <h4 className="message-item__title title-dialog">Чат</h4>
                        {messagesElement}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Dialogs;