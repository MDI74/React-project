import React from 'react';
import './Post.scss'

const Post= () => {
    return (
        <div className="post__list list-post">
            <h4 className="list-post__title">Мои посты</h4>
            <div className="list-post__body">
                <div className="list-post__icon">
                </div>
                <div className="list-post__message">
                    <p>Пост 1</p>
                </div>
            </div>
        </div>
    )
}

export default Post;