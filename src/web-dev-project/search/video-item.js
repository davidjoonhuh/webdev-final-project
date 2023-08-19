import React from 'react';
import "./index.css";

const VideoItem = (
    {
      vid = {}

    }) => {
  const d = new Date(vid.snippet.publishTime);
  const date = d.toLocaleDateString();
  return (
      <li className="list-group-item">
        <div className="row">
          <div className="col-auto">
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
        </div>

      </li>
  );
}
export default VideoItem;