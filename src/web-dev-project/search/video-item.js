import "./index.css";
import { AiFillStar } from "react-icons/ai";
import youtubeApi from "../youtube-api";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { findVideoCommentsThunk } from "../services/comments-thunks";
import { useState } from "react";



const VideoItem = (
    {
        vid = {}

    }) => {
    const d = new Date(vid.snippet.publishTime);
    const date = d.toLocaleDateString();
    const navigate = useNavigate();
    const handleVideoSelect = async (id) => {
        navigate("/youboxd/details?identifier=" + id);
    }

    const { comments, loading } = useSelector(state => state.comments);
    const dispatch = useDispatch();
    const [commentsCache, setCommentsCache] = useState(comments);

    useEffect(() => {
        async function fetchComments() {
            const { payload } = await dispatch(findVideoCommentsThunk(vid.id.videoId))
            setCommentsCache(payload)
            console.log(payload)
        }
        fetchComments()
    }, [])



    function LastComment({ comments }) {
        if (comments.length === 0) {
            return <div className="row wd-font-bold"> Be the first to comment! </div>; // Return an empty div if there are no comments
        }

        const lastComment = comments[comments.length - 1];
        console.log("FOUND ONE FOUND ONE FOUND ONE " + lastComment.text)
        return <div className="row wd-font-bold"> Last Comment Was: "{lastComment.text}" </div>
    }


    return (
        <li className="list-group-item">
            <div className="row">

                <div className="col-auto" style={{ "cursor": "pointer" }} onClick={() => handleVideoSelect(vid.id.videoId)}>
                    <img className='ui image rounded' src={vid.snippet.thumbnails.medium.url} alt={vid.snippet.description} />
                </div>
                <div className="col">
                    <div className='row wd-font-bold'>
                        {vid.snippet.title}
                    </div>
                    <div className='row wd-color-gray'>
                        {vid.snippet.channelTitle}
                    </div>
                    <div className='row wd-color-gray'>
                        {date}
                    </div>
                    <div className='row wd-color-gray'>
                        <LastComment comments={commentsCache} />
                    </div>
                    <div className='row wd-color-gray'>
                        Number of Comments : {commentsCache.length}
                    </div>
                </div>
            </div>

        </li>
    );
}
export default VideoItem;