import { createSlice } from "@reduxjs/toolkit";
import { findUserByIdThunk } from "../services/users-thunks";
const initialState = {
    user: null,
    loading: false
}

const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    extraReducers: {
        [findUserByIdThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false;
                state.user = payload;
            },
        [findUserByIdThunk.pending]:
            (state, { payload }) => {
                state.loading = true;
                state.payload = null;
            },
        [findUserByIdThunk.rejected]:
            (state, action) => {
                state.loading = false;
                state.comments = action.error;
            }
    }
})

export default commentsSlice.reducer
