import React from 'react';
import MyPosts from '../MyPosts/MyPosts';
import './Profile.scss'

const Profile = () => {
    return (
      <section className='profile'>
        <div className='profile__container'>
          <div className="profile__content">
            <div className='profile__background'>
              <img src='https://puzzleit.ru/files/puzzles/203/202512/_original.jpg' />
            </div>
            <div className="profile__item">
              <div className="profile__avatar">
                <img src="https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg" alt="" />
              </div>
              <div className="profile__information information-profile">
                  <h3 className="information-profile__name">
                      Мякотин Дмитрий
                  </h3>
                  <p className="information-profile__date">
                    Дата рождения: 26.09.2000
                  </p>
                  <div className="information-profile__city">
                    Город: Челябинск
                  </div>
              </div>
            </div>
            <MyPosts />
          </div>
        </div>
      </section>
    )
}

export default Profile;