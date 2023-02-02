import React from "react";
import "./Navigation.scss";
import NavigationItem from "./NavigationItem/NavigationItem";
import Friends from "./Friends/Friends";

const Navigation = (props) => {
    return (
        <div className="nav">
            <div className="nav__container">
                <div className="nav__content">
                    <NavigationItem src="/profile" name="Профиль"/>
                    <NavigationItem src="/dialogs" name="Сообщения"/>
                    <NavigationItem src="/news" name="Новости"/>
                    <NavigationItem src="/music" name="Музыка"/>
                    <NavigationItem src="/settings" name="Настройки"/>
                    <Friends friendsData={props.state.friendsData}/>
                </div>
            </div>
        </div>
    )
}
export default Navigation;