import React from 'react';
import VideoItem from './video-item';
import { useSelector } from "react-redux";

const VideoList = () => {
    const vids = useSelector(state => state.vids.vids)

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