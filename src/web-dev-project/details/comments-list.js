import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findVideoCommentsThunk } from "../services/comments-thunks";
import CommentsListItem from "./comments-list-item";
import CommentBox from "./comment-box";
import EmptyCommentBox from "./empty-comment-box";
import ViewerCommentBox from "./viewer-comment-box";


const CommentsList = (vId = "-1") => {
    // some sort of currentUser retrieval
    const { currentUser } = useSelector((state) => state.user);
    const { comments, loading } = useSelector(state => state.comments);
    const dispatch = useDispatch();
    const videoId = vId.vId
    useEffect(() => {
        dispatch(findVideoCommentsThunk(videoId))
    }, [])


    if (comments.length === 0 && currentUser && currentUser.role !== "Viewer") {
        return (<>
            No comments yet

            <CommentBox vId={videoId}/>
        </>
        )
    } else if (comments.length === 0 && currentUser && currentUser.role === "Viewer") {
        return (<>
            No comments yet

            <ViewerCommentBox/>
        </>
        )
    } else if (comments.length > 0 && currentUser  && currentUser.role !== "Viewer"){
        return (
            <>
                <ul className="list-group">
                    {
                        comments.map(comment =>
                            <CommentsListItem
                                comment={comment}/>)
                    }
                </ul>

                <CommentBox vId={videoId}/>

            </>);
    } else if (comments.length > 0 && currentUser  && currentUser.role === "Viewer"){
        return (
            <>
                <ul className="list-group">
                    {
                        comments.map(comment =>
                            <CommentsListItem
                                comment={comment}/>)
                    }
                </ul>

                <ViewerCommentBox/>

            </>);
    } else if (comments.length > 0 && !currentUser){
        return (
            <>
                <ul className="list-group">
                    {
                        comments.map(comment =>
                            <CommentsListItem
                                comment={comment} />)
                    }
                </ul>

                <EmptyCommentBox/>

            </>);
    } else if (comments.length === 0 && !currentUser){
        return (
            <>
                No comments yet

                <EmptyCommentBox/>

            </>);
    }

};

export default CommentsList;
