import axios from 'axios';

const SERVER_API_URL = process.env.REACT_APP_SERVER_API_URL;
const ADMIN_API = `${SERVER_API_URL}/admin`;

// Fetch all users (Admin only)
export const fetchAllUsers = async () => {
  const response = await axios.get(`${ADMIN_API}/users`);
  const allUsers = response.data;
  return allUsers;
}

// Fetch a user by ID (Admin only)
export const findUserById = async (uid) => {
  const response = await axios.get(`${ADMIN_API}/users/${uid}`);
  const user = response.data;
  return user;
}

// Delete a user by ID (Admin only)
export const deleteUserById = async (uid) => {
  const response = await axios.delete(`${ADMIN_API}/users/${uid}`);
  return response.data;
}