import React, { useEffect, useState } from 'react';
import "./index.css";
import { AiFillStar } from "react-icons/ai";
import youtubeApi from "../youtube-api";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { videoLikedToggle } from '../reducers/videos-reducer';
import { findVideosThunk } from '../services/videos-thunks';
import { videoLikedUserToggle } from '../reducers/auth-reducer';
import { updateUserThunk } from '../services/auth-thunks';
import { updateVideoThunk, createVideoThunk } from '../services/videos-thunks';

const VideoItem = (
    {
        vid = {}

    }) => {
    const d = new Date(vid.snippet.publishTime);
    const date = d.toLocaleDateString();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { videos, loading } = useSelector(state => state.videos);
    const { currentUser } = useSelector((state) => state.user);
    //const [profile, setProfile] = useState(currentUser);

    const updateUser = (vId) => {
        // Create a deep copy of currentUser
        const user = JSON.parse(JSON.stringify(currentUser));

        // Check if user.liked is an array or not, and initialize it if needed
        if (!Array.isArray(user.liked)) {
            user.liked = [];
        }

        // Check if vId is in user.liked and either push it or remove it
        if (user.liked.indexOf(vId) === -1) {
            user.liked.push(vId);
        } else {
            user.liked.splice(user.liked.indexOf(vId), 1);
        }
        return user
    }

    const uidInVideo = (vId, uId) => {
        const video = videos.find((video) => video.videoId === vId);

        if (video && Array.isArray(video.likes) && video.likes.indexOf(uId) !== -1) {
            return true;
        } else {
            return false;
        }
    }
    const createVideoIfNot = (vId) => {
        const video = videos.find((video) => video.videoId === vId);

        const vidTemp = {
            videoId: vId,
            likes: [],
            comments: []
        }

        if (!video) {
            dispatch(createVideoThunk(vidTemp));
        }
    }

    const updateVideo = (vId, uId) => {
        const video = videos.find((video) => video.videoId === vId);

        const vid = JSON.parse(JSON.stringify(video));
        console.log(vid)
        if (!Array.isArray(vid.likes)) {
            vid.likes = [];
        }

        if (vid.likes.indexOf(uId) === -1) {
            vid.likes.push(uId)
        } else {
            vid.likes.splice(vid.likes.indexOf(uId), 1)
        }
        console.log(vid)
        if (!vid) {
            dispatch(createVideoIfNot(vId))
        }
        return vid
    }


    const toggleVideoLiked = async (obj) => {
        console.log(obj)
        const x = uidInVideo(obj.videoId, obj.user._id)
        console.log(x)
        const v = updateVideo(obj.videoId, obj.user._id)
        const user = updateUser(obj.videoId)
        console.log(v)
        await dispatch(updateUserThunk(user));
        await dispatch(updateVideoThunk(v));
    }
    const handleVideoSelect = async (id) => {
        navigate("/youboxd/details?identifier=" + id);
    }
    useEffect(() => {
        // dispatch(createVideoIfNot(vid.id.videoId))
    }, [])
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
                </div>
                {currentUser &&
                    (<div style={{ "cursor": "pointer" }} onClick={() => toggleVideoLiked({ "videoId": vid.id.videoId, "user": currentUser })} className="col-auto" >
                        {/* onClick={() => toggleTuitLiked(tuit)} */}
                        <AiFillStar className={uidInVideo(vid.id.videoId, currentUser._id) ? "text-primary" : "text-danger"} />
                        {/* {uidInVideo(vid.id.videoId, currentUser._id) ? "text-primary" : "text-danger"} */}
                    </div>)
                }

            </div>

        </li>
    );
}
export default VideoItem;