import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    vids: [],
    currentVid: null
}

const videoSlice = createSlice({
    name: 'vids',
    initialState,
    reducers: {
        updateVideoArray(state, action) {
            console.log(action.payload)
            state.vids = action.payload.slice(0);
            console.log(state.vids)
        },
    }
});
export const { updateVideoArray } = videoSlice.actions
export default videoSlice.reducer;