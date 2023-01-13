import React from 'react';
import './MyPosts.scss'
import Post from './Post/Post';

const MyPosts= () => {
    return (
      <div className='post'>
        <div className="post__container">
          <div className="post__content">
            <h4 className='post__title title-post'>Написать пост:</h4>
            <form action="post" className='post__form'>
                <textarea className='post__input'></textarea>
                <button type='submit' className='post__button'>Добавить пост</button>
            </form>
            <div className="post__list list-post">
              <h4 className='list-post title-post'>Мои посты:</h4>
              <Post message='Hello'/>
              <Post message='Second post'/>
            </div>
          </div>
        </div>
      </div>
    )
}

export default MyPosts;