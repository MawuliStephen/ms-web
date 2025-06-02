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

  useEffect(() => {
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
        setData(result as T);
      } catch (error) {
        setError('Failed to fetch data');
        console.error('API request error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, method, body]);

  return { data, loading, error };
};

export default useApi;


// import { useState, useEffect } from 'react';
// import { getData, postData, putData, patchData, deleteData } from '../utils/api';

// const useApi = <T>(
//   url: string,
//   method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' = 'GET', 
//   body?: object
// ) => {
//   const [data, setData] = useState<T | null>(null);
//   const [loading, setLoading] = useState<boolean>(false);
//   const [error, setError] = useState<string | null>(null);

//   const fetchData = async () => {
//     setLoading(true);
//     setError(null);
//     try {
//       let result;
//       switch (method) {
//         case 'GET':
//           result = await getData(url);
//           break;
//         case 'POST':
//           result = await postData(url, body || {});
//           break;
//         case 'PUT':
//           result = await putData(url, body || {});
//           break;
//         case 'PATCH':
//           result = await patchData(url, body || {});
//           break;
//         case 'DELETE':
//           result = await deleteData(url);
//           break;
//         default:
//           throw new Error(`Unsupported method: ${method}`);
//       }
//       setData(result);
//     } catch (error) {
//       setError('Failed to fetch data');
//       console.error('API request error:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Automatically fetch data when the component mounts or when the URL or method changes
//   useEffect(() => {
//     fetchData();
//   }, [url, method]);

//   return { data, loading, error, fetchData };
// };

// export default useApi;


