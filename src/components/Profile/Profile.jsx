import React from "react";
import "./Profile.scss";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <section className="profile">
            <div className="profile__container">
                <ProfileInfo profile={props.profile}/>
                <MyPostsContainer/>
            </div>
        </section>
    )
}

// background="https://puzzleit.ru/files/puzzles/203/202512/_original.jpg"
// image="https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg"
// name="Мякотин Дмитрий" date="26.09.2000" city="Челябинск"
export default Profile;