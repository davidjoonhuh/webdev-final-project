import axios from 'axios';

const SERVER_API_URL = process.env.REACT_APP_SERVER_API_URL;
const API_BASE_URL = `${SERVER_API_URL}`;  // Updated base API URL

const api = axios.create({ withCredentials: true });

export const findAllUsers = async () => {
  const response = await api.get(`${API_BASE_URL}/users`);  // Updated endpoint path
  const allUsers = response.data;
  return allUsers;
}

export const findUserById = async (uid) => {
  const response = await api.get(`${API_BASE_URL}/users/${uid}`);  // Updated endpoint path
  const user = response.data;
  return user;
}
