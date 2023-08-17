import "./index.css";
import SearchBar from "./search-bar";
import youtubeApi from "../youtube-api";
import VideoList from "./video-list";
import { useState } from "react";
import { useSelector } from "react-redux";
import videoReducer from "../reducers/video-reducer";
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from "react-redux";
const store = configureStore(
    { reducer: { vids: videoReducer } });

function SearchPage() {
    // var state = {
    //     videos: [],
    //     selectedVideo: null
    // }
    // const [videos, setVideos] = useState("");
    // const [selectedVideo, setSelectedVideo] = useState("");

    // const handleSubmit = async (searchTerm) => {
    //     const response = await youtubeApi.get('/search', {
    //         params: {
    //             q: searchTerm
    //         }
    //     })
    //     await setVideos(response.data.items)

    //     console.log("Response from API:", videos);
    // };
    // const handleVideoSelect = (video) => {
    //     setSelectedVideo(video)
    // }

    return (
        <Provider store={store}>
            <h2>Search Page</h2>
            <SearchBar/>
            <label> </label>
            <VideoList/>
        </Provider>
    );
}

export default SearchPage