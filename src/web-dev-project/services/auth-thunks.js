import { createAsyncThunk } from "@reduxjs/toolkit";
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
    "user/logout", async () => {
      return await authService.logout();
    }
);

export const deleteUserThunk = createAsyncThunk(
    "user/delete", async (credentials) => {
      const user = await authService.deleteUser(credentials);
      return user;
    }
);

export const updateUserThunk = createAsyncThunk(
    "user/updateUser", async (user) => {
      await authService.updateUser(user);
      return user;
    }
);

export const updateUserByIdThunk = createAsyncThunk(
    "user/updateUserById", async ({user, uid}) => {
      await authService.updateUserById({user, uid});
      return user;
    }
);

export const registerThunk = createAsyncThunk(
    "user/register", async (credentials) => {
      const user = await authService.register(credentials);
      return user;
    }
);

export const modifyUserThunk = createAsyncThunk("user/modifyUser", async (user) => {
      await authService.modifyUser(user._id, user);
      return user;
    }
);

export const getUsersThunk = createAsyncThunk("users/getUsers", async () => {
  const users = await authService.getUsers();
  return users;
});

export const filterUsersThunk = createAsyncThunk("users/filterUsers", async (conditions) => {
  const users = await authService.filterUsers(conditions);
  return users;
});