import React from 'react'
import './Message.scss'

const Message = (props) => {

    return (
        <div className="message-item__body">
            <p className="message-item__text">{props.message}</p>
        </div>
    )
}
export default Message;