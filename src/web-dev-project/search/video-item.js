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

const VideoItem = (
    {
        vid = {}

    }) => {
    const d = new Date(vid.snippet.publishTime);
    const date = d.toLocaleDateString();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { videos, loading } = useSelector(state => state.videos)
    const [vids, setVid] = useState(videos);
    const { currentUser } = useSelector((state) => state.user);
    //const [profile, setProfile] = useState(currentUser);


    const toggleVideoLiked = async (obj) => {
        await dispatch(videoLikedToggle(obj))
        const action = await dispatch(videoLikedUserToggle(obj))
        console.log(action.payload)
        console.log("Before updateUserThunk")
        console.log(currentUser)
        console.log(vids)
        // await dispatch(updateUserThunk(action.payload.user));
        console.log("After updateUserThunk")
        console.log(currentUser)
        //console.log(action.payload)
        //console.log(currentUser)
        //setProfile(action.payload)
    }
    const handleVideoSelect = async (id) => {
        navigate("/youboxd/details?identifier=" + id);
    }
    useEffect(() => {
        dispatch(findVideosThunk())
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
                <div style={{ "cursor": "pointer" }} onClick={() => toggleVideoLiked({ "videoId": vid.id.videoId, "user": currentUser })} className="col-auto" >
                    {/* onClick={() => toggleTuitLiked(tuit)} */}
                    <AiFillStar className="text-primary" />
                </div>
            </div>

        </li>
    );
}
export default VideoItem;