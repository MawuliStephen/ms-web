"use client";
import { createContext, useEffect, useState } from "react";
import axiosInstance from "./Authorization";

const API = process.env.REACT_APP_BASE_URL;

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    // Safely parse the user from localStorage
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      if (user) {
        setCurrentUser(user);
      }
    } catch (error) {
      console.error("Failed to parse user from localStorage:", error);
      localStorage.removeItem("user");
    }
  }, []);

  const login = async (inputs) => {
    try {
      const res = await axiosInstance.post(`${API}auth/login`, inputs);
      
      // Save the token to localStorage
      localStorage.setItem("token", res.data.token); // Store the token in localStorage
      
      // Save user data to state and localStorage
      setCurrentUser(res.data);
      localStorage.setItem("user", JSON.stringify(res.data));
    } catch (err) {
      console.error("Error during login:", err);
    }
  };

  const logout = async () => {
    try {
      await axiosInstance.post(`${API}auth/logout`);
      
      // Remove token and user data from localStorage
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      
      // Clear state
      setCurrentUser(null);
    } catch (err) {
      console.error("Error during logout:", err);
    }
  };

  useEffect(() => {
    // Update the user in localStorage when currentUser changes
    if (currentUser) {
      localStorage.setItem("user", JSON.stringify(currentUser));
    }
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};



// // import axios from "axios";
// "use client";
// import { createContext, useEffect, useState } from "react";
// import axiosInstance from "./Authorization";

// const API = process.env.REACT_APP_BASE_URL;

// export const AuthContext = createContext();

// export const AuthContextProvider = ({ children }) => {
//   const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null);
  
//   const login = async (inputs) => {
//     try {
//       const res = await axiosInstance.post(`${API}auth/login`, inputs);
      
//       // Save the token to localStorage
//       localStorage.setItem("token", res.data.token); // Store the token in localStorage
      
//       // Save user data to state
//       setCurrentUser(res.data);
//       console.log(res.data);
//     } catch (err) {
//       console.error("Error during login:", err);
//     }
//   };

//   const logout = async () => {
//     try {
//       await axiosInstance.post(`${API}auth/logout`);
      
//       // Remove token and user data from localStorage
//       localStorage.removeItem("token");
//       localStorage.removeItem("user");
      
//       // Clear state
//       setCurrentUser(null);
//     } catch (err) {
//       console.error("Error during logout:", err);
//     }
//   };

//   useEffect(() => {
//     // Update the user in localStorage when currentUser changes
//     if (currentUser) {
//       localStorage.setItem("user", JSON.stringify(currentUser));
//     }
//   }, [currentUser]);

//   return (
//     <AuthContext.Provider value={{ currentUser, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
