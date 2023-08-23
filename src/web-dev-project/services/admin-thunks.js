import { createAsyncThunk } from "@reduxjs/toolkit";
import * as adminService from "./admin-service";

export const fetchAllUsersThunk = createAsyncThunk(
    "admin/fetchAllUsers",
    async () => {
        const users = await adminService.fetchAllUsers();
        return users;
    }
);

export const adminFindUserByIdThunk = createAsyncThunk(
    "admin/findUserById",
    async (id) => {
        const user = await adminService.findUserById(id);
        return user;
    }
);

export const adminDeleteUserByIdThunk = createAsyncThunk(
    "admin/deleteUserById",
    async (id) => {
        await adminService.deleteUserById(id);
        return id;
    }
);
