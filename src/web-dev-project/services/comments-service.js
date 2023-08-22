import axios from "axios";
const SERVER_API_URL = process.env.REACT_APP_SERVER_API_URL;
const COMMENTS_URL = `${SERVER_API_URL}/comments`;
const AUTHOR_COMMENTS = `${SERVER_API_URL}/authorcomments`;
const VIDEO_COMMENTS = `${SERVER_API_URL}/videocomments`;

export const createComment = async (comment) => {
    const response = await axios.post(COMMENTS_URL, comment);
    return response.data;
}

export const findComments = async () => {
    const response = await axios.get(COMMENTS_URL);
    return response.data;
}

export const findUserComments = async (id) => {
    const response = await axios.get(`${AUTHOR_COMMENTS}/${id}`);
    return response.data;
}

export const findVideoComments = async (id) => {
    const response = await axios.get(`${VIDEO_COMMENTS}/${id}`);
    return response.data;
}

export const deleteComment = async (commentId) => {
    const response = await axios.delete(`${COMMENTS_URL}/${commentId}`);
    return response.data;
}

