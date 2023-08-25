import axios from "axios";

const SERVER_API_URL = process.env.REACT_APP_SERVER_API_URL;
const API_BASE_URL = `${SERVER_API_URL}/api`;  // Updated base API URL

const api = axios.create({ withCredentials: true });

export const login = async ({ username, password }) => {
  const response = await api.post(`${API_BASE_URL}/users/login`, { username, password });
  const user = response.data;
  return user;
};

export const logout = async () => {
  const response = await api.post(`${API_BASE_URL}/users/logout`);
  return response.data;
};

export const profile = async () => {
  const response = await api.post(`${API_BASE_URL}/users/profile`);
  return response.data;
};

export const updateUser = async (user) => {
  const response = await api.put(`${API_BASE_URL}/users/${user._id}`, user);
  return response.data;
};

export const register = async ({ username, password, firstName, lastName, role, email, phone, address }) => {
  const response = await api.post(`${API_BASE_URL}/users/register`, { username, password, firstName, lastName, role, email, phone, address });
  const user = response.data;
  return user;
}

export const updateUserById = async (user) => {
  const response = await api.put(`${API_BASE_URL}/publicuser`, user);
  return response.data;
};

export const deleteUser = async (userId) => {
  const response = await api.delete(`${API_BASE_URL}/users/${userId}`);
  return response.data;
};
