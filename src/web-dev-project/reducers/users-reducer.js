import { createSlice } from "@reduxjs/toolkit";
import { findUserByIdThunk } from "../services/users-thunks";
const initialState = {
    user: null,
    loading: false,
    error: null
}

const usersSlice = createSlice({
    name: 'users',
    initialState,
    extraReducers: {
        [findUserByIdThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false;
                state.user = payload;
            },
        [findUserByIdThunk.pending]:
            (state) => {
                state.loading = true;
                state.user = null;
            },
        [findUserByIdThunk.rejected]:
            (state, action) => {
                state.loading = false;
                state.error = action.error;
            }
    }
})

export default usersSlice.reducer
