import React from 'react'
import './MyPosts.scss'
import Post from './Post/Post'
import './../../Button/Buttons.scss'
import {addPostActionCreator, updateNewPostCreator} from "../../../redux/State";

const MyPosts = (props) => {

    let postsElement = props.postData.map(post => <Post id={post.id} message={post.message} likes={post.likes_count}/>);

    //Создает ссылку на textarea
    let newPostElement = React.createRef();

    //Функция для добавления постов на страницу profile
    const addPost = () => {
        let action = addPostActionCreator()
        props.dispatch(action);
    }

    //Функция для обновления textarea при вводе текста
    const onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostCreator(text);
        props.dispatch(action);
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
                                onClick={addPost}>Добавить пост
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