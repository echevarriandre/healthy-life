import axios from "axios";

const calendlyApi = axios.create({
  baseURL: "https://api.calendly.com/",
});

calendlyApi.interceptors.request.use(
  async (config) => {
    // const token = localStorage.getItem("calendly_token");
    // if (token) {
    config.headers.Authorization = `Bearer ${import.meta.env.VITE_CALENDLY_TOKEN}`;
    //   return config;
    // }

    return config;
  },
  (error) => Promise.reject(error),
);

calendlyApi.interceptors.response.use(
  (response) => response,
  (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      return axios.post(import.meta.env.VITE_PIPEDREAM_URL).then(({ data }) => {
        localStorage.setItem("calendly_token", data.token);
        originalRequest.headers["Authorization"] = "Bearer " + data.token;
        return axios(originalRequest);
      });
    }

    return Promise.reject(error);
  },
);

export default calendlyApi;
