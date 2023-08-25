import { createAsyncThunk } from '@reduxjs/toolkit';
import * as service from './users-service';

export const findUserByIdThunk = createAsyncThunk(
    "users/findUserById",
    async (id) => {
        console.log("findUserByIdThunk is called");
        const user = await service.findUserById(id);
        return user;
    }
);
