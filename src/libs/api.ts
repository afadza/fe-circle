import axios from "axios";

export const API = axios.create({
  baseURL: "https://circle-app-api.onrender.com/api/v1",
});

export function seAuthToken(token: string) {
  if (token) {
    API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete API.defaults.headers.common["Authorization"];
  }
}
