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
                state.videos.push(payload)
                console.log("pushed")
                console.log(payload)
                console.log(state.videos)
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
    }

});

export default videosSlice.reducer;

