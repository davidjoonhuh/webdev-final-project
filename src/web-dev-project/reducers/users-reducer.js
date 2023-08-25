import { createSlice } from "@reduxjs/toolkit";
import { findUserByIdThunk } from "../services/users-thunks";
const initialState = {
    user: {},
    loading: false
}

const userSlice = createSlice({
    name: 'users',
    initialState,
    extraReducers: {
        [findUserByIdThunk.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.users[payload._id] = payload;
        },
        [findUserByIdThunk.pending]: (state, { payload }) => {
            state.loading = true;
        },
        [findUserByIdThunk.rejected]: (state, action) => {
            state.loading = false;
        }
    }
});

export default userSlice.reducer

