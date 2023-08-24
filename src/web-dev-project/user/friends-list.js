import { Link } from "react-router-dom";
import React from "react";
import FriendsListItem from "./friends-list-item";






const FriendsList = (user = null) => {
    console.log(user.user)
    const current = user.user;
    console.log(current)
    const friends = user.user.friends;
    console.log(friends)


    return (
        <ul className="list-group">
            <h3>Friends List ({friends.length})</h3>
                    {
                        friends.map(friend =>
                            <FriendsListItem
                                friend={friend}
                                current={current}/>)
                    }

        </ul>
    )

}

export default FriendsList