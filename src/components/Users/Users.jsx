import React from "react";
import "./Users.scss";
import User from "./User/User";
import axios from "axios";

class Users extends React.Component {
    constructor(props) {
        super(props);

        //Подгружаем данные из api
        if (this.props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                this.props.setUsers(response.data.items)
            })
        }
    }

    render() {
        let usersElement = this.props.users.map(user => <User addFriend={this.props.addFriend}
                                                              delFriend={this.props.delFriend}
                                                              key={user.id} id={user.id} follow={user.followed}
                                                              name={user.name}
                                                              status={user.status}
            // city={user.location.city} country={user.location.country}
                                                              photo={user.photos.small}/>);
        return (
            <section className="users">
                <div className="users__container">
                    <div className="users__content">
                        <div className="user__topmenu">
                            <p className="users__title">Найти друзей</p>
                        </div>
                        <div className="users__item item-user">
                            {usersElement}
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Users;