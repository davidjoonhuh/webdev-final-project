import { createAsyncThunk } from "@reduxjs/toolkit";
import * as authService from "./auth-service";


export const loginThunk = createAsyncThunk(
    "user/login", async (credentials) => {
        const user = await authService.login(credentials);
        return user;
    }
);

export const profileThunk = createAsyncThunk(
    "auth/profile", async () => {
        //const response = authService.profile();
       // return response.data;
       return await authService.profile();

    });

export const logoutThunk = createAsyncThunk(
    "auth/logout", async () => {
        return await authService.logout();
    });

export const updateUserThunk = createAsyncThunk(
    "user/updateUser", async (user) => {
        console.log("updateuserthunk:")
        console.log(user)
        await authService.updateUser(user);
        console.log("returned user")
        console.log(user)
        return user;
    });

export const registerThunk = createAsyncThunk(
    "user/register", async (cred) => {
        const user = await authService.register(cred);
        return user;
    });