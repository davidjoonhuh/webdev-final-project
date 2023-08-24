import { createSlice } from "@reduxjs/toolkit";
import { findUserByIdThunk, updateUserSinCurrentThunk } from "../services/users-thunks";
const initialState = {
    userInfo: null,
    loading: false
}

const usersSlice = createSlice({
    name: 'users',
    initialState,
    extraReducers: {
        [findUserByIdThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false;
                console.log("usersSlice")
                console.log(payload)
                state.userInfo = payload;
            },
        [findUserByIdThunk.pending]:
            (state, { payload }) => {
                state.loading = true;
                state.userInfo = null;
            },
        [findUserByIdThunk.rejected]:
            (state, action) => {
                state.loading = false;
                state.userInfo = action.error;
            },
        [updateUserSinCurrentThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false;
            },
    }
})

export default usersSlice.reducer
