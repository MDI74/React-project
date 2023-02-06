import React from "react";
import "./Users.scss";
import User from "./User/User";


const Users = (props) => {
    debugger
    if (props.users.length === 0) {
        props.setUsers([{
            id: 1,
            friend: false,
            fullName: 'Дмитрий',
            status: 'HI!',
            location: {city: 'Москва', country: 'Россия'},
            avatar: 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg'
        },
        ])
    }

    let usersElement = props.users.map(user => <User addFriend={props.addFriend} delFriend={props.delFriend}
                                                     key={user.id} id={user.id} friend={user.friend}
                                                     fullName={user.fullName}
                                                     status={user.status}
                                                     city={user.location.city} country={user.location.country}
                                                     avatar={user.avatar}/>);

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

export default Users;