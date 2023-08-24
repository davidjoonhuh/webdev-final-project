import axios from 'axios';

const SERVER_API_URL = process.env.REACT_APP_SERVER_API_URL;
const WHO_API = `${SERVER_API_URL}/users`;
const UPDATE_USERS = `${SERVER_API_URL}/updateusers`;

export const findAllUsers = async () => {
  const response = await axios.get(WHO_API);
  const allUsers = response.data;
  return allUsers;
}

export const findUserById = async (uid) => {
  const response = await axios.get(`${WHO_API}/${uid}`);
  const user = response.data;
  return user;
}

export const updateUserSinCurrent = async (user) => {
  const response = await axios.put(`${UPDATE_USERS}/${user._id}`, user);
  return response.data;
};