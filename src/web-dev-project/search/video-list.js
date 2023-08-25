import React from 'react';
import VideoItem from './video-item';
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { findVideoCommentsThunk } from '../services/comments-thunks';

const VideoList = () => {
    const vids = useSelector(state => state.vids.vids)


    return (
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