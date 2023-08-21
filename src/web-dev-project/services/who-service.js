import axios from 'axios';

// const API_BASE = process.env.REACT_APP_API_BASE;
const SERVER_API_URL = process.env.REACT_APP_SERVER_API_URL;
const WHO_API = `${SERVER_API_URL}/users`;

const api = axios.create({ withCredentials: true });

export const findAllUsers = async () => {
  const response = await api.get(WHO_API);
  const allUsers = response.data;
  return allUsers;
}

export const findUserById = async (uid) => {
  const response = await api.get(`${WHO_API}/${uid}`);
  const user = response.data;
  return user;
}
