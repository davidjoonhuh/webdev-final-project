import { createSlice } from "@reduxjs/toolkit";
import { fetchAllUsersThunk, adminFindUserByIdThunk, adminDeleteUserByIdThunk } from "../services/admin-thunks";

const initialState = {
    allUsers: [],
    selectedUser: null,
    loading: false,
    error: null,
};

const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
    },
    extraReducers: {
        [fetchAllUsersThunk.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.allUsers = payload;
        },
        [fetchAllUsersThunk.pending]: (state) => {
            state.loading = true;
        },
        [fetchAllUsersThunk.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error;
        },
        [adminFindUserByIdThunk.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.selectedUser = payload;
        },
        [adminDeleteUserByIdThunk.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.allUsers = state.allUsers.filter(user => user.id !== payload);
        },
    },
});

export default adminSlice.reducer;
