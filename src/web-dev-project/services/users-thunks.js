import { createAsyncThunk } from "@reduxjs/toolkit";
import * as service from "./users-service";

export const findUserByIdThunk = createAsyncThunk(
    "users/findUserById",
    async (id) => {
        const user = await service.findUserById(id)
        return user;
    })

export const updateUserSinCurrentThunk = createAsyncThunk(
    "users/updateUserSinCurrent",
    async (id) => {
        const user = await service.updateUserSinCurrent(id)
        return user;
    })



