// src/utils/cache.ts

// Generic function to load data from cache (localStorage)
export const getFromCache = (key: string) => {
    if (typeof window !== 'undefined') {
      const cachedData = localStorage.getItem(key);
      if (cachedData) {
        return JSON.parse(cachedData);
      }
    }
    return null;
  };
  
  // Generic function to save data to cache (localStorage)
  export const saveToCache = (key: string, data: any) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(key, JSON.stringify(data));
    }
  };
  
  // Function to remove specific data from cache (localStorage)
  export const removeFromCache = (key: string) => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(key);
    }
  };
  
  // Optionally, you could also add expiration logic if you want to make cache expire after some time
  export const setCacheWithExpiry = (key: string, data: any, expiryTime: number) => {
    if (typeof window !== 'undefined') {
      const expiryTimestamp = new Date().getTime() + expiryTime;
      const cacheData = {
        data,
        expiry: expiryTimestamp,
      };
      localStorage.setItem(key, JSON.stringify(cacheData));
    }
  };
  
  export const getCacheWithExpiry = (key: string) => {
    if (typeof window !== 'undefined') {
      const cachedData = localStorage.getItem(key);
      if (cachedData) {
        const { data, expiry }: { data: any; expiry: number } = JSON.parse(cachedData);
        if (new Date().getTime() < expiry) {
          return data; // Return data if it hasn't expired
        } else {
          removeFromCache(key); // Remove expired cache
        }
      }
    }
    return null;
  };
  