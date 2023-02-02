import React from "react";
import "./Post.scss";

const Post = (props) => {
    return (
        <div className="board-post__body">
            <div className="board-post__message">
                <p>{props.message}</p>
            </div>
        </div>
    )
}

export default Post;