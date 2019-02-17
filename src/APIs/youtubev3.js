import axios from "axios";

// Youtube API Key
const KEY = 'AIzaSyDwrPMAIEULVH6yr9ncB9QvoT0noPViXB8';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});