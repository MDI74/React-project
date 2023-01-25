import React from 'react'
import './Post.scss'

const Post= (props) => {
    return (
        <div className="list-post__body">
            <div className="list-post__icon">
            </div>
            <div className="list-post__message">
                <p>{props.message}</p>
            </div>
        </div>
    )
}

export default Post;