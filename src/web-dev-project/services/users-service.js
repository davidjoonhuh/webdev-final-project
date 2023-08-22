import axios from 'axios';

const SERVER_API_URL = process.env.REACT_APP_SERVER_API_URL;
const WHO_API = `${SERVER_API_URL}/users`;

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
