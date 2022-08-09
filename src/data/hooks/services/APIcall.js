import axios from "axios";

const zenApi = axios.create({
  baseURL: "https://zenquotes.io/api/random",
  headers: {
    "Content-Type": "application/json",
  },
});

export { zenApi };
