import axios from "axios";

const KEY = "AIzaSyAXi_o1N_si4K9oUqAboI2-FGN4CqxN8zE";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 10,
    key: KEY
  }
});
