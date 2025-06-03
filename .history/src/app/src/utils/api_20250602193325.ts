// src/utils/api.ts

// || 'http://localhost:5000/api/v1'

// const BASE_URL = process.env.NEXT_PUBLIC_API_URL 


import { getAuthToken } from "./auth";



const request = async <T = unknown>(url: string, method: string, data?: object): Promise<T> => {
  const token = getAuthToken(); // Get the token from cookies or localStorage
  const options: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` }),
    },
    ...(data && { body: JSON.stringify(data) }),
  };

  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  return response.json() as Promise<T>;
};

  // Add body if data is provided
  // if (data) {
  //   options.body = JSON.stringify(data);
  // }


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