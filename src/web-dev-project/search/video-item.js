import React from 'react';
import "./index.css";
import { AiFillStar } from "react-icons/ai";
import youtubeApi from "../youtube-api";
import { useNavigate } from "react-router-dom";


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
                <div style={{ "cursor": "pointer" }}  className="col-auto" > 
                {/* onClick={() => toggleTuitLiked(tuit)} */}
                    <AiFillStar className="text-primary"/>
                </div>
            </div>

        </li>
    );
}
export default VideoItem;