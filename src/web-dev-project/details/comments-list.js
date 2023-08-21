import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findVideoCommentsThunk } from "../services/comments-thunks";
import CommentsListItem from "./comments-list-item";

const CommentsList = ( vId = "-1" ) => {
    // some sort of currentUser retrieval
    const { comments, loading } = useSelector(state => state.comments);
    const dispatch = useDispatch();
    const videoId = vId.vId
    useEffect(() => {
        dispatch(findVideoCommentsThunk(videoId))
    }, [])

    console.log("Comments")
    console.log(comments)
    console.log("Loading")
    console.log(loading)

    if (comments.length === 0) {
        return (<>
        No comments yet
        
        </>

        )
    } else {
    return (<ul className="list-group">
        {
            comments.map(comment =>
                <CommentsListItem
                    comment={comment}/>)
        }
        </ul>);
    }

};

export default CommentsList;
