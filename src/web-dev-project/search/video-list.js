import React, { useEffect } from "react";
import VideoItem from './video-item';
import { useDispatch, useSelector } from "react-redux";
import { findVideosThunk } from '../services/videos-thunks';

const VideoList = () => {
    const vids = useSelector(state => state.vids.vids)
    console.log(vids)
    const videos = useSelector(state => state.videos)
    console.log(videos)

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findVideosThunk())
    }, [])

    return(
        <div className='ui relaxed divided list'>
            <ul className="list-group">
                {
                    vids.map(todo => {
                        return (<VideoItem vid={todo} />);
                    })
                }
            </ul>
        </div>
    );
    
};
export default VideoList;