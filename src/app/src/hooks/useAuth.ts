// src/hooks/useAuth.ts
import { useState, useEffect } from 'react';
import { getAuthToken } from '../utils/auth';


const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    // const token = getAuthToken();
    const token = getAuthToken
    setIsAuthenticated(!!token); // Check if token exists
  }, []);

  return { isAuthenticated };
};

export default useAuth;
