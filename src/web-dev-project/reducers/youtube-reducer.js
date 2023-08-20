import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    vids: [],
}

const youtubeSlice = createSlice({
    name: 'vids',
    initialState,
    reducers: {
        updateVideoArray(state, action) {
            state.vids = action.payload.slice(0);
        },
    }
});
export const { updateVideoArray } = youtubeSlice.actions
export default youtubeSlice.reducer;