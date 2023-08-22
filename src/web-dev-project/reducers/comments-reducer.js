import { createSlice } from "@reduxjs/toolkit";
import { createCommentThunk, findCommentsThunk, findUserCommentsThunk, findVideoCommentsThunk } from "../services/comments-thunks"

const initialState = {
    comments: [],
    loading: false
}

const templateComment = {
    "videoId": "",
    "text": "",
    "timestamp": new Date().toISOString(),
    "authorId": "",
}

const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    extraReducers: {
        [createCommentThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.comments.push(payload)
            },
        [findCommentsThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false;
                state.comments = payload;
            },
        [findUserCommentsThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false;
                state.comments = payload;
            },
        [findVideoCommentsThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false;
                state.comments = payload;
            },
        [findVideoCommentsThunk.pending]:
            (state, { payload }) => {
                state.loading = true;
                state.comments = [];
            },
        [findVideoCommentsThunk.rejected]:
            (state, action) => {
                state.loading = false;
                state.comments = action.error;
            }
    }
})

export default commentsSlice.reducer
