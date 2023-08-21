import { createAsyncThunk } from "@reduxjs/toolkit";
import * as service from "./videos-service";


export const updateVideoThunk =
    createAsyncThunk(
        'videos/updateVideo',
        async (video) =>
            await service.updateVideo(video)
    )
export const createVideoThunk = createAsyncThunk(
    'videos/createVideo',
    async (video) => {
        const newVideo = await service.createVideo(video)
        return newVideo
    })

export const deleteVideoThunk = createAsyncThunk(
    'videos/deleteVideo',
    async (videoId) => {
        await service.deleteVideo(videoId)
        return videoId
    })

export const findVideosThunk = createAsyncThunk(
    "videos/findVideos",
    async () => await service.findVideos()
);
