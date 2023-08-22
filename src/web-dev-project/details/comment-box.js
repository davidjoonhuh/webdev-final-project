import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {createCommentThunk } from "../services/comments-thunks";

const CommentBox = ( {vId = "-1" }) => {
    // Comment details here
    const { currentUser } = useSelector((state) => state.user);
    let [newComment, setNewComment] = useState('');
    const dispatch = useDispatch();
    const videoId = vId;

    const newCommentHandler = () => {
        const comment = {
            videoId: videoId,
            text: newComment,
            timestamp: new Date().toISOString(),
            authorId: currentUser._id,
        }
        dispatch(createCommentThunk(comment));
        setNewComment("");
    }

    return (
        <div>
        <textarea value={newComment} placeholder="Write a comment!"
            className="form-control border-0"
            onChange={(event) => setNewComment(event.target.value)}>
        </textarea>
        <div>
            <button className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"
                onClick={newCommentHandler}>
                Comment
            </button>
        </div>
    </div>
    );



};

export default CommentBox