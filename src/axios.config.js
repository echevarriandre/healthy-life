import axios from "axios";

const calendlyApi = axios.create({
  baseURL: "https://api.calendly.com/",
});

calendlyApi.interceptors.request.use(
  async (config) => {
    // const token = localStorage.getItem("calendly_token");
    // if (token) {
      config.headers.Authorization = `Bearer eyJraWQiOiIxY2UxZTEzNjE3ZGNmNzY2YjNjZWJjY2Y4ZGM1YmFmYThhNjVlNjg0MDIzZjdjMzJiZTgzNDliMjM4MDEzNWI0IiwidHlwIjoiUEFUIiwiYWxnIjoiRVMyNTYifQ.eyJpc3MiOiJodHRwczovL2F1dGguY2FsZW5kbHkuY29tIiwiaWF0IjoxNjg2NTAwOTcxLCJqdGkiOiJiMjFkNGZmZi1hMWVlLTQwNTktYjc0OS1mM2E2MGE5MGUzNDEiLCJ1c2VyX3V1aWQiOiIyNDJlN2UwOS0wZmIwLTQ0NTctODY3Mi0zNzBjMzE0OGE2MDMifQ.DQmgNBhAvWebARmzZDW3d0GRyRyEpUd0vD34WVTMGN9ULz6yUn4_GvB47b6gcoioq0feClcDOUArDztkVdspkQ`;
      // return config;
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
