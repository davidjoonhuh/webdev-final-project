import "./index.css";
import SearchBar from "./search-bar";
import youtubeApi from "../youtube-api";
import VideoList from "./video-list";
import { useState } from "react";

function SearchPage() {
    var state = {
        videos: [],
        selectedVideo: null
    }
    const [videos, setVideos] = useState("");
    const [selectedVideo, setSelectedVideo] = useState("");

    const handleSubmit = async (searchTerm) => {
        const response = await youtubeApi.get('/search', {
            params: {
                q: searchTerm
            }
        })
        setVideos(response.data.items)

        console.log("Response from API:", response);
    };
    const handleVideoSelect = (video) => {
        setSelectedVideo(video)
    }

    return <>
        <h2>Search Page</h2>
        <SearchBar handleFormSubmit={handleSubmit}/>
        <VideoList handleVideoSelect={handleVideoSelect} videos={videos}/>
    </>;
}

export default SearchPage