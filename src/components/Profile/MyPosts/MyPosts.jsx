import React from "react";
import "./MyPosts.scss";
import Post from "./Post/Post"
import "./../../Button/Buttons.scss";

const MyPosts = (props) => {

    let postsElement = props.postsData.map(post => <Post key={post.id} id={post.id} message={post.message}
                                                         likes={post.likes_count}/>);

    //Создает ссылку на textarea
    let newPostElement = React.createRef();

    //Функция для добавления постов на страницу profile
    const onAddPost = () => {
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
                        <label htmlFor="my-post" className="post__title title-post">Написать пост:</label>
                        <textarea className="post__input" id="my-post" ref={newPostElement} onChange={onPostChange}
                                  value={props.newPostText}/>
                        <button className="post__button button-form button-form--mypost" type="button"
                                onClick={onAddPost}>Добавить пост
                        </button>
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