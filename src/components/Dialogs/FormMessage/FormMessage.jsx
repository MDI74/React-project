import React from "react";
import "./FormMessage.scss";
import "./../../Button/Buttons.scss";

const FormMessage = (props) => {

    //Создает ссылку на textarea
    let newMessageElement = React.createRef();

    //Функция для добавления сообщений на страницу profile
    const onAddMessage = () => {
        props.addMessage();
    }

    //Функция для обновления textarea при вводе текста
    const onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.updateNewMessageText(text);
    }

    return (
        <form action="" method="post" className="message__form form-message">
            <textarea className="form-message__input" placeholder="Ваше сообщение" ref={newMessageElement}
                      onChange={onMessageChange} value={props.newMessageText}/>
            <button className="form-message__button button-form" type="button" onClick={onAddMessage}>Отправить</button>
        </form>
    )
}
export default FormMessage;