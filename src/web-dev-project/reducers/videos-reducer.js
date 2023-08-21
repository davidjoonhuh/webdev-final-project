import { createSlice } from "@reduxjs/toolkit";
import { updateVideoThunk, createVideoThunk, deleteVideoThunk, findVideosThunk } from "../services/videos-thunks";

const initialState = {
    videos: [],
    loading: false
}

const templateTuit = {
    "videoId": "123",
    "likes": [],
    "comments": [],

}

const videosSlice = createSlice({
    name: 'videos',
    initialState,
    extraReducers: {
        [updateVideoThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                const videoNdx = state.videos.findIndex((t) => t._id === payload._id)
                state.videos[videoNdx] = { ...state.videos[videoNdx], ...payload }
            },
        [createVideoThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.videos.push({ ...templateTuit, payload })
            },
        [deleteVideoThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.videos = state.videos.filter(t => t._id !== payload)
            },
        [findVideosThunk.pending]:
            (state) => {
                state.loading = true
                state.videos = []
            },
        [findVideosThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.videos = payload
            },
        [findVideosThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error
            }
    },
    reducers: {
        videoLikedToggle(state, action) {
            const video = state.videos.find((video) => video.videoId === action.payload.videoId)
            video.likes.indexOf(action.payload.user._id) === -1 ? video.likes.push(action.payload.user._id) : video.likes.splice(video.likes.indexOf(action.payload.user._id), 1)
            console.log("HEIAHDAIHDAHI")
        },
        createVideo(state, action) {
            state.videos.unshift({
                ...templateTuit,
                videoId: action.payload,
                _id: (new Date()).getTime(),
            })
        },
        deleteVideo(state, action) {
            const index = state.videos
                .findIndex(video =>
                    video._id === action.payload);
            state.videos.splice(index, 1);
        },
    }

});
export const { videoLikedToggle, createVideo, deleteVideo } = videosSlice.actions
export default videosSlice.reducer;

