// src/utils/api.ts
// const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://meo-saas.mawulistephen.com/api/v1'
const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api/v1'

import { getAuthToken } from "./auth";

const request = async (url: string, method: string, data?: object): Promise<any> => {
  const token = getAuthToken(); // Get the token from cookies or localStorage
  const options: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` }),
    },
  };

  // Add body if data is provided
  if (data) {
    options.body = JSON.stringify(data);
  }

  try {
    const response = await fetch(`${BASE_URL}${url}`, options);

    // Log the response status and the response body for debugging
    console.log('Response Status:', response.status);
    console.log('Response Status Text:', response.statusText);

    // If the response is not OK, log the error and throw an exception
    if (!response.ok) {
      const errorData = await response.text() || 'No additional error information';
      console.log('Error Response:', errorData);
      
      // Handling specific HTTP status codes
      if (response.status === 401) {
        // Unauthorized error, redirect to login (customize based on your app)
        console.error('Unauthorized access - Redirecting to login...');
        window.location.href = '/login'; // Redirect to login page or display a modal
        throw new Error(`Unauthorized access (401). Redirecting to login.`);
      }

      // Throw a generic error for other non-OK responses
      throw new Error(`Error ${response.status} - ${response.statusText}: ${errorData}`);
    }

    // Check if the response is a JSON type before trying to parse it
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      const responseData = await response.json(); // Parse as JSON if the content type is JSON
      return responseData;
    } else {
      // If not JSON, return the response text (or handle it in another way)
      const responseText = await response.text();
      console.log('Response Body (non-JSON):', responseText);
      return responseText;
    }
  } catch (error) {
    // Catch any errors in the fetch request and log them
    console.error('Request failed:', error);

    // If it's a network error or timeout, handle accordingly
    if (error instanceof TypeError && error.message === 'Failed to fetch') {
      console.error('Network error: Unable to connect to the server.');
    }

    throw error; // Rethrow the error so the calling function can handle it
  }
};


//HTTP GET
export const getData = async (url: string) => {
  console.log(`Fetching data from: ${url}`);  // Log the URL you're fetching from
  return request(url, 'GET');
};


// HTTP POST
export const postData = async (url: string, data: object) => {
  return request(url, 'POST', data);
};

// HTTP PUT (for full resource updates)
export const putData = async (url: string, data: object) => {
  return request(url, 'PUT', data);
};

// HTTP PATCH (for partial resource updates)
export const patchData = async (url: string, data: object) => {
  return request(url, 'PATCH', data);
};

// HTTP DELETE
export const deleteData = async (url: string) => {
  return request(url, 'DELETE');
};
 
// // Utility function to handle HTTP requests
// const request = async (url: string, method: string, data?: object) => {
//   const token = getAuthToken(); // Get the token from cookies or localStorage
//   const options: RequestInit = {
//     method,
//     headers: { 'Content-Type': 'application/json',
//       ...(token && { 'Authorization': `Bearer ${token}` })
      
//     },
//   };

//   if (data) {
//     options.body = JSON.stringify(data);
//   }

//   const response = await fetch(`${BASE_URL}${url}`, options);

//   // Log the response status and the response body for debugging
//   console.log('Response Status:', response.status);
//   console.log('Response Status Text:', response.statusText);

//   // If the response is not OK, log the error and throw an exception
//   if (!response.ok) {
//     const errorData = await response.text(); // Use text() to avoid JSON parsing issues on non-JSON responses
//     console.log('Error Response:', errorData);
//     throw new Error(`Error ${response.status} - ${response.statusText}: ${errorData}`);
//   }

//   // Check if the response is a JSON type before trying to parse it
//   const contentType = response.headers.get('content-type');

//   if (contentType && contentType.includes('application/json')) {
//     const responseData = await response.json(); // Parse as JSON if the content type is JSON
//     return responseData;
//   } else {
//     // If not JSON, return the response text (or handle it in another way)
//     const responseText = await response.text();
//     console.log('Response Body (non-JSON):', responseText);
//     return responseText;
//   }
// };

// HTTP GET
