import React from 'react';
import './MyPosts.scss'
import Post from './Post/Post';

const MyPosts= () => {
    return (
      <div className='post'>
        <div className="post__container">
          <div className="post__content">
            <h4 className='post__title'>Написать пост</h4>
            <form action="post" className='post__form'>
                <textarea className='post__input'></textarea>
                <button type='submit' className='post__button'>Добавить пост</button>
            </form>
            <Post />
          </div>
        </div>
      </div>
    )
}

export default MyPosts;