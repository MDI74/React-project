import React from 'react'
import './Friends.scss'
import Friend from "./Friend/Friend";

const Friends = (props) => {

    let friendElement = props.friendsData.map(friend => <Friend id={friend.id} name={friend.name}
                                                                avatar={friend.avatar}/>);

    return (
        <div className="friends">
            <div className="friends__container">
                <div className="friends__content">
                    <h4 className="friends__title">Друзья</h4>
                    <div className="friends__info info-friend">
                        {friendElement}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Friends;