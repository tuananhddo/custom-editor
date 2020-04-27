import axios from "axios";

const instance = () => {
  const axiosInstance = axios.create();
  return axiosInstance;
};
export const DEFAULT_URL = 'http://localhost:3000';
export default instance;


