import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findUserByIdThunk } from "../services/users-thunks";
import { useState } from "react";
import { Link } from "react-router-dom";

const CommentsListItem = ({ comment }) => {
    const { user, loading } = useSelector((state) => state.user)
    const [commentUsername, setCommentUsername] = useState(user);
    const dispatch = useDispatch();

    useEffect(() => {
        async function fetchUserId() {
            const { payload } = await dispatch(findUserByIdThunk(comment.authorId))
            setCommentUsername(payload.username)
        }
        fetchUserId()
    }, [])

    function formatTimestamp(timestamp) {
        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            timeZoneName: 'short'
        };

        const formattedDate = new Date(timestamp).toLocaleString('en-US', options);
        return formattedDate;
    }

    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col-10">
                    <div className="col-9">
                        <b>
                        <Link className="nav-link" to={"/youboxd/profile/" + comment.authorId}
                            style={{ textDecoration: 'underline' }}> {commentUsername}</Link>
                        </b> 
                    </div>
                    <div> <b> {formatTimestamp(comment.timestamp)} </b></div>
                    <div>{comment.text}</div>
                </div>
            </div>
        </li>
    );



};

export default CommentsListItem