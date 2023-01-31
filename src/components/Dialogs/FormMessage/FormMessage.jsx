import React from 'react'
import './FormMessage.scss'
import './../../Button/Buttons.scss'

const FormMessage = (props) => {

    let newMessageElement = React.createRef();

    const addMessage = () => {
        props.dispatch({type: 'ADD-MESSAGE'});
    }
    const onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.dispatch({type: 'UPDATE-NEW-MESSAGE-TEXT', newText: text});
    }

    return (
        <form action="" method="post" className="message__form form-message">
            <textarea className="form-message__input" placeholder="Ваше сообщение" ref={newMessageElement}
                      onChange={onMessageChange} value={props.newMessageText}/>
            <button className="form-message__button button-form" type="button" onClick={addMessage}>Отправить</button>
        </form>
    )
}
export default FormMessage;