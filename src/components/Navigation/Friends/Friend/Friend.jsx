import React from "react";
import "./Friend.scss";
import {NavLink} from "react-router-dom";

const Friend = (props) => {

    let path = 'profile/' + props.id;

    return (
        <NavLink to={path} className="info-friend__body">
            <div className="info-friend__avatar">
                <img src={props.avatar} alt="Avatar"/>
            </div>
            <p className="info-friend__name">{props.name}</p>
        </NavLink>
    )
}
export default Friend;