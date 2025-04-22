import axios from "axios";

// Create a separate axios instance with the Authorization header
const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
  });
  
  // Add the token to the Authorization header of each request
  axiosInstance.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("token");
    //   console.log(token);
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  
  export default axiosInstance;
  