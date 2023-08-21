import { createAsyncThunk } from "@reduxjs/toolkit";
import * as service from "./who-service";

export const findWhoToFollowListThunk = createAsyncThunk(
    "whoToFollowList/allUsers",
    async () => {
      const allUsers = await service.findAllUsers()
      return allUsers
    }
);

export const findUserById = createAsyncThunk(
    "whoToFollowList/findUser",
    async () => await service.findUserById()
);
