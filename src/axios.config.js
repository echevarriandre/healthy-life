import axios from "axios";

let token = null;
await axios.post(import.meta.env.VITE_PIPEDREAM_URL).then((response) => {
  token = response.data.token;
});

const calendlyApi = axios.create({
  baseURL: "https://api.calendly.com/",
  headers: {
    Authorization: `Bearer ${token}`,
    // Authorization: `Bearer ${import.meta.env.VITE_OAUTH_CODE}`,
  },
});

export default calendlyApi;
