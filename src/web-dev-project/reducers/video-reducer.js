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
      state.vids = action.payload.slice(0);
    },
  }
});
export const { updateVideoArray } = videoSlice.actions
export default videoSlice.reducer;