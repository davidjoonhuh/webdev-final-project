import axios from "axios";
const KEY = 'AIzaSyAwrPVvq1zilSa2WVDlJ408d_XtXy1uBxc';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})