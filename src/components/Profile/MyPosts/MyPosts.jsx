import React from 'react'
import './MyPosts.scss'
import Post from './Post/Post'
import './../../Button/Buttons.scss'

const MyPosts= (props) => {

    let postsElement = props.postData.map(post => <Post id={post.id} message={post.message} likes={post.likescount} />);

    //Создает ссылку на textarea
    let newPostElement = React.createRef();

    //Функция для добавления постов на страницу profile
    const addPost = () => {
        props.addPost();
    }

    //Функция для обновления textarea при вводе текста
    const onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
      <div className="post">
        <div className="post__container">
          <div className="post__content">
            <form action="" method="post" className="post__form">
                <label for="mypost" className="post__title title-post">Написать пост:</label>
                <textarea className="post__input" id="mypost" ref={newPostElement}  onChange={onPostChange} value={props.newPostText} />
                <button className="post__button button-form" type="button" onClick={addPost}>Добавить пост</button>
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