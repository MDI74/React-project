import React from 'react'
import './ProfileInfo.scss'

const ProfileInfo = (props) => {
    return (
        <div className="profile__content">
            <div className="profile__background">
                <img src={props.background}/>
            </div>
            <div className="profile__item">
                <div className="profile__avatar">
                    <img src={props.image} alt="Avatar"/>
                </div>
                <div className="profile__information information-profile">
                    <h3 className="information-profile__name">
                        {props.name}
                    </h3>
                    <p className="information-profile__date">
                        Дата рождения: {props.date}
                    </p>
                    <div className="information-profile__city">
                        Город: {props.city}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;