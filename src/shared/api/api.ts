import axios from "axios";

export const $api = axios.create({
  baseURL: __API__,
  headers: {
    Authorization: `Bearer ${__API__}`,
  },
});
