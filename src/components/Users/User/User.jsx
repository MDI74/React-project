import React from "react";
import "./User.scss";
import {NavLink} from "react-router-dom";

const User = (props) => {

    let path = "/profile/" + props.id;

    return (
        <div className="item-user__body">
            <NavLink to={path} className="item-user__image">
                <img src={props.avatar} alt="Avatar"/>
            </NavLink>
            <div className="item-user__info">
                <h4 className="item-user__fullname">{props.fullName}</h4>
                <p>Город: {props.city}</p>
                <p className="item-user__status">{props.status} </p>
                {props.friend
                    ? <button onClick={() =>{props.delFriend(props.id)}} className="button button--friend">Удалить из
                        друзья</button>
                    : <button onClick={() => {props.addFriend(props.id)}} className="button button--friend">Добавить в
                        друзья</button>}

            </div>
        </div>
    )
}

export default User;