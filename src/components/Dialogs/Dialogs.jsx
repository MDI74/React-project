import React from 'react';
import './Dialogs.scss'

const Dialogs = (props) => {
    return (
        <section className="dialogs">
            <div className="dialogs__container">
                <div className="dialogs__content">
                    <div className="dialogs__items item-dialog">
                        <h4 className="item-dialog__title title-dialog">Диалоги</h4>
                        <div className="item-dialog__content">
                            <div className="item-dialog__body">
                                <p className="item-dialog__name">Dima</p>
                            </div>
                            <div className="item-dialog__body">
                                <p className="item-dialog__name">Dima</p>
                            </div>
                            <div className="item-dialog__body">
                                <p className="item-dialog__name">Dima</p>
                            </div>
                        </div>
                    </div>
                    <div className="dialogs__messages message-item">
                        <h4 className="message-item__title title-dialog">Чат</h4>
                        <div className="message-item__content">
                            <div className="message-item__body">
                                <p>Hi</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Dialogs;