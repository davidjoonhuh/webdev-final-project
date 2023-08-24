import React, { useCallback, useEffect, useState } from "react";
import VideoItem from './video-item';
import { useDispatch, useSelector } from "react-redux";
import { findVideosThunk } from '../services/videos-thunks';

const VideoList = () => {
    const vids = useSelector(state => state.vids.vids)
    // console.log(vids)
    const videos = useSelector(state => state.videos)
    const [videosCache, setVideosCache] = useState(videos)
    // console.log(videos)

    const fetchVideos = useCallback(async () => {
        const { payload } = await dispatch(findVideosThunk())
        console.log("payload")
        // console.log(payload)
        // setVideosList(payload);
        // setVideosCache(p ayload)
    })

    const dispatch = useDispatch();
    useEffect(() => {
        // dispatch(findVideosThunk())
        fetchVideos();
    }, [videos])

    return(
        <div className=''>
            <div className="row">
                <div className="col-6">
                    <ul className="list-group">
                        {
                            vids.map(todo => {
                                return (<VideoItem vid={todo}/>);
                            })
                        }
                    </ul>
                </div>
                <div className="col-6">
                    <pre>
                    {JSON.stringify(vids, null, 2)}
                    </pre>
                                    </div>
                </div>
        </div>
    );
    
};
export default VideoList;