import React from 'react'
import './MyPosts.scss'
import Post from './Post/Post'
import './../../Button/Buttons.scss'

const MyPosts= (props) => {

    let postsElement = props.postData.map(post => <Post id={post.id} message={post.message} likes={post.likescount} />);

    //Создает ссылку на textarea
    let newPostElement = React.createRef();
    const addPost = () =>{

        //Обращаемся к значению ссылки
        let text = newPostElement.current.value;

        return props.addPost(text);
    }

    return (
      <div className="post">
        <div className="post__container">
          <div className="post__content">
            <h4 className="post__title title-post">Написать пост:</h4>
            <form action="" method="post" className="post__form">
                <textarea className="post__input" ref={newPostElement}></textarea>
                <button className="post__button button-form" onClick={addPost}>Добавить пост</button>
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