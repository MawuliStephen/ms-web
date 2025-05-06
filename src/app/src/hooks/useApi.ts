import { useState, useEffect } from 'react';
import { getData, postData, putData, patchData, deleteData } from '../utils/api';

const useApi = <T>(
  url: string,
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' = 'GET', 
  body?: object
) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      let result;
      switch (method) {
        case 'GET':
          result = await getData(url);
          break;
        case 'POST':
          result = await postData(url, body || {});
          break;
        case 'PUT':
          result = await putData(url, body || {});
          break;
        case 'PATCH':
          result = await patchData(url, body || {});
          break;
        case 'DELETE':
          result = await deleteData(url);
          break;
        default:
          throw new Error(`Unsupported method: ${method}`);
      }
      setData(result);
    } catch (error) {
      setError('Failed to fetch data');
      console.error('API request error:', error);
    } finally {
      setLoading(false);
    }
  };

  // Automatically fetch data when the component mounts or when the URL or method changes
  useEffect(() => {
    fetchData();
  }, [url, method]);

  return { data, loading, error, fetchData };
};

export default useApi;




// // src/hooks/useApi.ts
// import { useState } from 'react';

// const useApi = <T>(url: string, method: 'GET' | 'POST' = 'GET', body?: object) => {
//   const [data, setData] = useState<T | null>(null);
//   const [loading, setLoading] = useState<boolean>(false);
//   const [error, setError] = useState<string | null>(null);

//   const fetchData = async () => {
//     setLoading(true);
//     setError(null);
//     try {
//       const response = await fetch(url, {
//         method,
//         headers: { 'Content-Type': 'application/json' },
//         body: body ? JSON.stringify(body) : undefined,
//       });
//       const result = await response.json();
//       setData(result);
//     } catch (error) {
//       setError('Failed to fetch data');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return { data, loading, error, fetchData };
// };

// export default useApi;
