import React from 'react'
import './FormMessage.scss'
import './../../Button/Buttons.scss'

const FormMessage = (props) => {

    let newMessageElement = React.createRef();

    const addMessage = () => {
        props.addMessage();
    }
    const onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.updateNewMessageText(text);
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