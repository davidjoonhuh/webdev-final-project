import { useLocation } from "react-router-dom";
import youtubeApi from "../youtube-api";
import React, { useEffect, useState } from "react";
import { GrView } from "react-icons/gr";
import { FaRegThumbsUp } from "react-icons/fa6";
import { BsChatDots } from "react-icons/bs";
import { GrFavorite } from "react-icons/gr";
import "./index.css";

function DetailsPage() {
    const location = useLocation();
    const [videoData, setVideoData] = useState();
    const videoId = new URLSearchParams(location.search).get('identifier')
    const convertISO8601ToSeconds = (input) => {

        var reptms = /^PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/;
        var hours = 0, minutes = 0, seconds = 0, totalseconds;

        if (reptms.test(input)) {
            var matches = reptms.exec(input);
            if (matches[1]) hours = Number(matches[1]);
            if (matches[2]) minutes = Number(matches[2]);
            if (matches[3]) seconds = Number(matches[3]);
            totalseconds = hours * 3600 + minutes * 60 + seconds;
        }

        var sec_num = parseInt(totalseconds, 10); // don't forget the second param
        var h = Math.floor(sec_num / 3600);
        var m = Math.floor((sec_num - (h * 3600)) / 60);
        var s = sec_num - (h * 3600) - (m * 60);

        if (h < 10) { h = "0" + h; }
        if (m < 10) { m = "0" + m; }
        if (s < 10) { s = "0" + s; }
        return h + ':' + m + ':' + s;
    }
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await youtubeApi.get('/videos', {
                    params: {
                        id: videoId,
                        part: "snippet, statistics, contentDetails"
                    }
                });
                const responseData = response.data.items[0];
                setVideoData(responseData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);
    return (
        <>
            <h2>Video Details</h2>
            <div>
                {videoData && (
                    <div>
                        <div className="row">
                            <div className="col-auto">
                                <img className='ui image rounded' src={videoData.snippet.thumbnails.high.url} />
                            </div>
                            <div className="col">
                                <div className='row wd-font-bold'>
                                    {videoData.snippet.title}
                                </div>
                                <div className='row'>
                                    {videoData.snippet.channelTitle}
                                </div>
                                <div className='row wd-color-gray'>
                                    {videoData.snippet.description}
                                </div>
                            </div>
                        </div>
                        <br />
                        <div className="row">
                            <h4>Youtube Statistics:</h4>
                        </div>
                        <div className="row">
                            <span className="col-3">
                                <GrView />
                                <label className="wd-padded-left">
                                    {videoData.statistics.viewCount}
                                </label>
                            </span>
                            <span className="col-3">
                                <FaRegThumbsUp />
                                <label className="wd-padded-left">
                                    {videoData.statistics.likeCount}
                                </label>
                            </span>
                            <span className="col-3">
                                <BsChatDots />
                                <label className="wd-padded-left">
                                    {videoData.statistics.commentCount}
                                </label>
                            </span>
                            <span className="col-3">
                                <GrFavorite />
                                <label className="wd-padded-left">
                                    {videoData.statistics.favoriteCount}
                                </label>
                            </span>
                        </div>
                        <br />
                        <div className="row">
                            <h4>Content Details:</h4>
                            <p>Duration: {convertISO8601ToSeconds(videoData.contentDetails.duration)}</p>
                            <p>Definition: {videoData.contentDetails.definition}</p>
                            <p>Dimension: {videoData.contentDetails.dimension}</p>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default DetailsPage;