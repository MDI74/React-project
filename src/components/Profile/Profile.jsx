import React from 'react'
import MyPosts from './MyPosts/MyPosts'
import './Profile.scss'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = () => {
    return (
      <section className="profile">
        <div className="profile__container">
            <ProfileInfo background = "https://puzzleit.ru/files/puzzles/203/202512/_original.jpg" image="https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg" name="Мякотин Дмитрий" date ="26.09.2000" city="Челябинск"/>
            <MyPosts />
        </div>
      </section>
    )
}

export default Profile;