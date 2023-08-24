import {createAsyncThunk} from "@reduxjs/toolkit";
import * as authService from "./auth-service";

export const loginThunk = createAsyncThunk(
    "user/login", async (credentials) => {
      const user = await authService.login(credentials);
      return user;
    }
);

export const profileThunk = createAsyncThunk(
    "user/profile", async () => {
      const currentUser = await authService.profile();
      return currentUser;
    }
);


export const logoutThunk = createAsyncThunk(
    "auth/logout", async () => {
      return await authService.logout();
    });

export const updateUserThunk = createAsyncThunk(
    "user/updateUser", async (user) => {
      await authService.updateUser(user);
      return user;
    });

export const registerThunk = createAsyncThunk(
    "user/register", async (user) => {
      const registeredUser = await authService.register(user);
      return registeredUser;
    }
);

export const updateUserByIdThunk = createAsyncThunk(
    "user/updateUserById", async ({user, uid}) => {
      await authService.updateUserById({user, uid});
      return user;
    }
);

export const deleteUserThunk = createAsyncThunk(
    "user/deleteUser",
    async (userId) => {
      await authService.deleteUser(userId);
      return userId;
    }
);
