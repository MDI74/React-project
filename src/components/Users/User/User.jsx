import React from "react";
import "./User.scss";
import {NavLink} from "react-router-dom";
import usersPhoto from "../../../images/users/usersPhoto.png";
import {usersAPI} from "../../../api/api";

const User = (props) => {

    let path = "/profile/" + props.id;

    return (
        <div className="item-user__body">
            <NavLink to={path} className="item-user__photo">
                <img src={props.photo ? props.photo : usersPhoto} alt="Avatar"/>
            </NavLink>
            <div className="item-user__info">
                <h4 className="item-user__fullname">{props.name}</h4>
                {/*<p>Город: {props.city}</p>*/}
                <p className="item-user__status">{props.status}</p>
            </div>
            {props.follow
                ? <button onClick={() =>{
                        //Удаляем пользователя из друзей
                        usersAPI.delFriend(props.id).then(data => {
                            if (data.resultCode === 0) {
                                props.delFriend(props.id)
                            }
                        });
                    }} className="button button--friend">Удалить из друзей</button>

                : <button onClick={() => {
                       //Добавляем в друзья пользователя
                       usersAPI.addFriend(props.id).then(data => {
                            if (data.resultCode === 0) {
                                props.addFriend(props.id)
                            }
                        });
                    }} className="button button--friend">Добавить в друзья</button>}
        </div>

    )
}

export default User;