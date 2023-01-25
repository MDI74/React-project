import React from 'react'
import './Message.scss'

const Message = (props) =>{
    return (
        <div className="message-item__content">
            <div className="message-item__body">
                <p>{props.message}</p>
            </div>
        </div>
    )
}
export default Message;