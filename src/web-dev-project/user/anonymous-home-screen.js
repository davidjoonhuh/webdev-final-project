import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { findCommentsThunk } from "../services/comments-thunks";
import * as whoService from "../services/who-service";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const AnonymousHomeScreen = () => {

    const { comments } = useSelector((state) => state.comments)

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(findCommentsThunk())
    }, [])

    const handleVideoSelect = async (id) => {
        navigate("/youboxd/details?identifier=" + id);
    }

    function YouTubeThumbnail({ videoId }) {
        const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/default.jpg`;

        return (
            <div>
                <img width={200} height={150} src={thumbnailUrl} alt={`Thumbnail for video ${videoId}`} />
            </div>
        );
    }
    function RecentComments({ comments }) {
        const mostRecentCommentsMap = new Map();

        comments.forEach(comment => {
            const videoId = comment.videoId;
            if (!mostRecentCommentsMap.has(videoId) || comment.timestamp > mostRecentCommentsMap.get(videoId).timestamp) {
                mostRecentCommentsMap.set(videoId, comment);
            }
        });

        const mostRecentComments = Array.from(mostRecentCommentsMap.values())
            .sort((a, b) => b.timestamp - a.timestamp)
            .slice(0, 4);

        return (
            <div>
                <h3>Recent Comments</h3>
                <ul className="list-group">
                    {mostRecentComments.map((comment, index) => (
                        <li className="list-group-item" key={index}>

                            <div className="row">
                                <div className="col-auto">
                                    <button onClick={() => handleVideoSelect(comment.videoId)}> <YouTubeThumbnail videoId={comment.videoId} /> </button>
                                </div>

                                <div className="col-auto">
                                    <div><b>  <Link className="nav-link" to={"/youboxd/profile/" + comment.authorId} style={{ textDecoration: 'underline' }}> A stranger </Link></b> commented:</div>
                                    <div> "<i> {comment.text} </i>" </div>
                                </div>
                            </div>




                        </li>
                    ))}
                </ul>
            </div>
        );
    }

    return (
        <>
            <RecentComments comments={comments} />
        </>







    )



}



// User most commented page



export default AnonymousHomeScreen;
