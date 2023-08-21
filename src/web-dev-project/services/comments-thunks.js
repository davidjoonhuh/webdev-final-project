import { createAsyncThunk } from "@reduxjs/toolkit";
import * as service from "./comments-service";

export const createCommentThunk = createAsyncThunk(
    "comments/createComment",
    async (comment) => {
        const newComment = await service.createComment(comment)
        return newComment;
    })

export const findCommentsThunk = createAsyncThunk(
    "comments/findAllComments",
    async () => {
        const comments = await service.findComments()
        return comments
    })

export const findUserCommentsThunk = createAsyncThunk(
    "comments/findUserComments",
    async (id) => {
        const userComments = await service.findUserComments(id)
        return userComments;
    })

export const findVideoCommentsThunk = createAsyncThunk(
    "comments/findVideoComments",
    async (id) => {
        const videoComments = await service.findVideoComments(id)
        return videoComments;
    })

export const deleteCommentThunk = createAsyncThunk(
    "comments/deleteComment",
    async (id) => {
        await service.deleteComment(id);
        return id;
    }
)