import { createAsyncThunk } from "@reduxjs/toolkit";
import * as service from "./who-service";

export const findWhoToFollowListThunk = createAsyncThunk(
    "whoToFollowList/allUsers",
    async () => {
      const allUsers = await service.findAllUsers();
      return allUsers;
    }
);

export const findUserByIdThunk = createAsyncThunk(
    "whoToFollowList/findUser",
    async (uid) => {
      const user = await service.findUserById(uid);  // Pass the user ID here
      return user;
    }
);
