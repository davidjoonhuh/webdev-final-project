import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { findUserByIdThunk, updateUserSinCurrentThunk } from "../services/users-thunks";
import React, { useEffect, useState } from "react";

const FriendsListItem = ({ friend = null, current = null }) => {
    console.log(friend)
    console.log(current)
    const fId = friend

    const { user, loading } = useSelector((state) => state.users)

    // console.log("currentuser " + currentUser.username)
    const [friendUsername, setFriendUsername] = useState(user);
    const dispatch = useDispatch();

    useEffect(() => {
        async function fetchUserId() {
            const { payload } = await dispatch(findUserByIdThunk(fId))
            setFriendUsername(payload.username)

        }
        fetchUserId()
    }, [])

    const removeFriend = async () => {
        console.log("remove friend")
        const newFriends = current.friends.filter(f => f !== fId)
        const updatedUser = {
            ...current,
            friends : newFriends
        }
        await dispatch(updateUserSinCurrentThunk(updatedUser))
    }

    return (

        <li className="list-group-item">
            <div className="row">
                <div className="col-10">
                    <div className="col-9">
                        <b>
                            <Link className="nav-link" to={"/youboxd/profile/" + fId}
                                style={{ textDecoration: 'underline' }}> {friendUsername}</Link>
                        </b>

                        
                        <button
                            onClick={() => {
                                removeFriend()
                            }}>                   Remove Friend</button>
                    </div>
                </div>
            </div>
        </li>


    )

}

export default FriendsListItem