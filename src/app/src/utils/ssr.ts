import { getData, postData, putData, deleteData } from './api';

// Fetch data with GET method
export const fetchServerSideData = async (url: string, ctx?: any) => {
  try {
    const data = await getData(url); // You don't need ctx unless you need it for other purposes
    return { data };
  } catch (error) {
    handleError(error, 'fetching server-side data');
    return { error: error instanceof Error ? error.message : 'Unknown error' };
  }
};

// Create or update data with POST method
export const postServerSideData = async (url: string, body: any, ctx?: any) => {
  try {
    const data = await postData(url, body); // Send body with POST request
    return { data };
  } catch (error) {
    handleError(error, 'posting server-side data');
    return { error: error instanceof Error ? error.message : 'Unknown error' };
  }
};

// Update data with PUT method
export const putServerSideData = async (url: string, body: any, ctx?: any) => {
  try {
    const data = await putData(url, body); // Send body with PUT request
    return { data };
  } catch (error) {
    handleError(error, 'putting server-side data');
    return { error: error instanceof Error ? error.message : 'Unknown error' };
  }
};

// Delete data with DELETE method
export const deleteServerSideData = async (url: string, ctx?: any) => {
  try {
    const data = await deleteData(url); // Perform DELETE request
    return { data };
  } catch (error) {
    handleError(error, 'deleting server-side data');
    return { error: error instanceof Error ? error.message : 'Unknown error' };
  }
};

// Helper function to handle errors and log them
const handleError = (error: unknown, action: string) => {
  if (error instanceof Error) {
    console.error(`Error ${action}: ${error.message}`);
  } else {
    console.error(`Error ${action}:`, error);
  }
};
