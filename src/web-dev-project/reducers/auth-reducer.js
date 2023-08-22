import { createSlice } from "@reduxjs/toolkit";
import { loginThunk, logoutThunk, profileThunk, updateUserThunk, registerThunk } from "../services/auth-thunks";


const authSlice = createSlice({
    name: "auth",
    initialState: { currentUser: null },
    reducers: {
        videoLikedUserToggle(state, action)  {
            // const currentUser = state.currentUser
            // console.log("DHJIASDHIASD")
            // currentUser.liked.indexOf(action.payload.videoId) === -1 ? console.log("Not in array") : currentUser.liked = []
            state.currentUser.liked.indexOf(action.payload.videoId) === -1 ? state.currentUser.liked.push(action.payload.videoId) : state.currentUser.liked.splice(state.currentUser.liked.indexOf(action.payload.videoId), 1)
        }
    },
    extraReducers: {
        [logoutThunk.fulfilled]: (state) => {
            state.currentUser = null;
        },
        [profileThunk.fulfilled]: (state, { payload }) => {
            state.currentUser = payload;
        },
        [profileThunk.rejected]: (state, { payload }) => {
            state.currentUser = null;
        },
        [profileThunk.pending]: (state, action) => {
            state.currentUser = null;
        },
        [updateUserThunk.fulfilled]: (state, { payload }) => {
            state.currentUser = payload;
        },
        [registerThunk.fulfilled]: (state, { payload }) => { 
            state.currentUser = payload;
        },
        [loginThunk.fulfilled]: (state, { payload }) => {
            state.currentUser = payload;
        },
    },
});
export const { videoLikedUserToggle } = authSlice.actions
export default authSlice.reducer;