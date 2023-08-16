import React from 'react';
import VideoItem from './video-item';

const VideoList = (props) => {
    const renderedVideos =  props.videos.map((video) => {
        return <VideoItem key={video.id.videoId} video={video} handleVideoSelect={props.handleVideoSelect} />
        // console.log(video.id);
    });

    return <div className='ui relaxed divided list'>{renderedVideos}</div>;
};
export default VideoList;