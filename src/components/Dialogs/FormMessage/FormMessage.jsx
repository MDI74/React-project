import React from 'react'
import './FormMessage.scss'
import './../../Button/Buttons.scss'
const FormMessage = (props) =>{

    return (
        <form action="" method="post" className="message__form form-message">
            <textarea className="form-message__input" placeholder="Ваше сообщение"></textarea>
            <button className="form-message__button button-form" >Отправить</button>
        </form>
    )
}
export default FormMessage;