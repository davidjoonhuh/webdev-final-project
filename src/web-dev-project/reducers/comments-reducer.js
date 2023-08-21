import { createSlice } from "@reduxjs/toolkit";
import { createCommentThunk, findCommentsThunk, findUserCommentsThunk, findVideoCommentsThunk, deleteCommentThunk } from "../services/comments-thunks"

const initialState = {
    comments : []
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

    }
})

export default commentsSlice.reducer
