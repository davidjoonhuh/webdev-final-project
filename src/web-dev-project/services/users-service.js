import axios from 'axios';
const SERVER_API_URL = process.env.REACT_APP_SERVER_API_URL;

// Construct the base API URL
const API_BASE_URL = `${SERVER_API_URL}`;

// Endpoint paths
const LOGIN_API = `${API_BASE_URL}/users/login`;
const PROFILE_API = `${API_BASE_URL}/users/profile`;
const USER_API = `${API_BASE_URL}/users`;

export const findAllUsers = async () => {
  const response = await axios.get(USER_API);
  const allUsers = response.data;
  return allUsers;
}

export const findUserById = async (uid) => {
  const response = await axios.get(`${USER_API}/${uid}`);
  const user = response.data;
  return user;
}

export const loginUser = async (username, password) => {
  const response = await axios.post(LOGIN_API, { username, password });
  const user = response.data;
  return user;
}

export const getUserProfile = async () => {
  const response = await axios.post(PROFILE_API);
  const user = response.data;
  return user;
}
