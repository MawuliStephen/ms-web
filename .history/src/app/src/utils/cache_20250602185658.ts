export const getCache = <T>(key: string): T | null => {
  if (typeof window !== 'undefined') {
    const cachedData = localStorage.getItem(key);
    if (cachedData) {
      return JSON.parse(cachedData) as T;
    }
  }
  return null;
};

export const setCache = <T>(key: string, data: T): void => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(key, JSON.stringify(data));
  }
};

export const removeCache = (key: string): void => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(key);
  }
};

export const isCacheStale = (key: string, maxAgeInSeconds: number): boolean => {
  if (typeof window !== 'undefined') {
    const cachedData = localStorage.getItem(key);
    if (cachedData) {
      try {
        const { timestamp } = JSON.parse(cachedData);
        const now = Date.now();
        return now - timestamp > maxAgeInSeconds * 1000;
      } catch {
        return true;
      }
    }
  }
  return true;
};


// export const getCache = (key: string) => {
//   if (typeof window !== 'undefined') {
//     const cachedData = localStorage.getItem(key);
//     if (cachedData) {
//       return JSON.parse(cachedData);
//     }
//   }
//   return null;
// };

// export const setCache = (key: string, data: any) => {
//   if (typeof window !== 'undefined') {
//     localStorage.setItem(key, JSON.stringify(data));
//   }
// };

// export const removeCache = (key: string) => {
//   if (typeof window !== 'undefined') {
//     localStorage.removeItem(key);
//   }
// };

// // Optional cache expiration logic
// export const isCacheStale = (key: string, maxAgeInSeconds: number) => {
//   if (typeof window !== 'undefined') {
//     const cachedData = localStorage.getItem(key);
//     if (cachedData) {
//       try {
//         const { timestamp } = JSON.parse(cachedData);
//         const now = Date.now();
//         return now - timestamp > maxAgeInSeconds * 1000;
//       } catch {
//         return true;
//       }
//     }
//   }
//   return true;
// };

