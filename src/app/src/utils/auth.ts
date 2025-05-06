// utils/auth.ts
import { parseCookies, setCookie, destroyCookie } from 'nookies';
import { useRouter } from 'next/navigation';

// Get the auth token from cookies or localStorage
export const getAuthToken = (): string | null => {
    // Parse cookies to get the access token
    const cookies = parseCookies();
    const tokenFromCookies = cookies['access_token'];
  
    // If running on the client-side, check localStorage as well
    const tokenFromLocalStorage = typeof window !== 'undefined' ? localStorage.getItem('access_token') : null;
  
    // Return the token from cookies or localStorage (cookies have higher priority)
    return tokenFromCookies || tokenFromLocalStorage || null;
  };

// Set the auth token to cookies
export const setAuthToken = (token: string) => {
  if (typeof window !== 'undefined') {
    // Only set cookies on the client-side
    const expires = new Date(Date.now() + 7 * 864e5); // expires in 7 days
    setCookie(null, 'access_token', token, {
      expires,   // Use a Date object for expires
      path: '/',
      sameSite: 'Lax', // Adjust for cross-origin requests if necessary
      secure: process.env.NODE_ENV === 'production', // Secure cookie in production (HTTPS)
    });
  }
};


// Clear the auth token from cookies and localStorage
export const clearAuthToken = () => {
  if (typeof window !== 'undefined') {
    destroyCookie(null, 'access_token', { path: '/' }); // Remove from cookies
    localStorage.removeItem('access_token'); // Remove from localStorage
  }
};

// Get user data from cookies or localStorage
export const getUser = (): { id: number; username: string } | null => {
  const cookies = parseCookies();
  const userFromCookies = cookies['user'];
  const userFromLocalStorage = typeof window !== 'undefined' ? localStorage.getItem('user') : null;

  try {
    return userFromCookies ? JSON.parse(userFromCookies) : userFromLocalStorage ? JSON.parse(userFromLocalStorage) : null;
  } catch (e) {
    console.error('Failed to parse user data:', e);
    return null;
  }
};

// Set user data to cookies and localStorage
export const setUser = (user: { id: number; username: string }) => {
    if (user && user.id && user.username) {
      if (typeof window !== 'undefined') {
        // Create a Date object that expires 7 days from now
        const expires = new Date(Date.now() + 7 * 864e5); // expires in 7 days
  
        // Set the cookie with the valid expires date
        setCookie(null, 'user', JSON.stringify(user), {
          expires, // Set a valid Date object for expires
          path: '/',
          sameSite: 'Lax',
          secure: process.env.NODE_ENV === 'production', // Secure cookie in production (HTTPS)
        });
      }
    } else {
      console.error('Invalid user data:', user);
    }
  };

// Clear user data from cookies and localStorage
export const clearUser = () => {
  if (typeof window !== 'undefined') {
    destroyCookie(null, 'user', { path: '/' }); // Remove from cookies
    localStorage.removeItem('user'); // Remove from localStorage
  }
};
// Updated logout function
export const logout = (router: any) => {
  clearAuthToken(); // Clear token from cookies and localStorage
  clearUser(); // Clear user data from cookies and localStorage
  // Redirect user to login page after logout
  router.push('/auth/login');
};
