import React from 'react';
// import '../style/video.css';

const VideoItem = (props) => {
    return (
        <div onClick={ () => props.handleVideoSelect(props.video)} className=' video-item item'>
            <img className='ui image' src={props.video.snippet.thumbnails.medium.url} alt={props.video.snippet.description}/>
            <div className='content'>
                <div className='header '>{props.video.snippet.title}</div>
            </div>
        </div>
    )
};
export default VideoItem;