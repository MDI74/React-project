import React from 'react'
import './MyPosts.scss'
import Post from './Post/Post'

const MyPosts= (props) => {

    let postsElement = props.postData.map(post => <Post id={post.id} message={post.message} likes={post.likescount} />);

    return (
      <div className="post">
        <div className="post__container">
          <div className="post__content">
            <h4 className="post__title title-post">Написать пост:</h4>
            <form action="#" method="post" className="post__form">
                <textarea className="post__input"></textarea>
                <button type="submit" className="post__button">Добавить пост</button>
            </form>
            <div className="post__board board-post">
              <h4 className="board-post title-post">Мои посты:</h4>
              {postsElement}
            </div>
          </div>
        </div>
      </div>
    )
}
export default MyPosts;