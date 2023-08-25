import {createSlice} from "@reduxjs/toolkit";
import {
  findWhoToFollowListThunk,
} from "../services/who-thunks";

const initialState = {
  whoToFollowList: [],
  loading: false,
  error: null
}

const whoToFollowListSlice = createSlice({
  name: 'whoToFollowList',
  initialState,
  extraReducers: {
    [findWhoToFollowListThunk.pending]:
        (state) => {
          state.loading = true
          state.whoToFollowList = [];
          state.error = null;
        },
    [findWhoToFollowListThunk.fulfilled]:
        (state, {payload}) => {
          state.loading = false
          state.whoToFollowList = payload
        },
    [findWhoToFollowListThunk.rejected]:
        (state, action) => {
          state.loading = false
          state.error = action.error
        }
  },
  reducers: {}
});

export default whoToFollowListSlice.reducer;
