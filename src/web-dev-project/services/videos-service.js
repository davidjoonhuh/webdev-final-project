import axios from 'axios';
const API_BASE = process.env.REACT_APP_SERVER_API_URL;
const VIDEOS_API = `${API_BASE}/videos`;
export const createVideo = async (video) => {
    const response = await axios.post(VIDEOS_API, video)
    return response.data;
}

export const findVideos = async () => {
    const response = await axios.get(VIDEOS_API);
    const videos = response.data;
    return videos;
}

export const deleteVideo = async (id) => {
    const response = await axios.delete(`${VIDEOS_API}/${id}`)
    return response.data
}

export const updateVideo = async (video) => {
    const response = await axios.put(`${VIDEOS_API}/${video.vId}`, video);
    return video;
}
