import React from "react";
import "./ProfileInfo.scss";
import Preloader from "../../Preloader/Preloader";
import usersPhoto from "../../../images/users/usersPhoto.png";

const ProfileInfo = (props) => {
    debugger
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div className="profile__content">
            <div className="profile__background">
                <img src={props.background} alt="Background"/>
            </div>
            <div className="profile__item">
                <div className="profile__avatar">
                    <img src={props.profile.photos.small ? props.profile.photos.small : usersPhoto} alt="Avatar"/>
                </div>
                <div className="profile__information information-profile">
                    <h3 className="information-profile__name">
                        {props.profile.fullName}
                    </h3>
                    <p className="information-profile__date">
                        Дата рождения: {props.profile.date}
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