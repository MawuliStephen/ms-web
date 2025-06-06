import { useState } from 'react';
import { postData } from '../utils/api';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { setAuthToken, setUser } from '../utils/auth';

interface FormData {
  username: string;
  password: string;
}

interface User {
  id: number;
  username: string;
  email: string;
  // Add more user fields as needed
}

interface LoginResponse {
  access_token?: string;
  user?: User;
  message?: string;
  [key: string]: unknown;
}

const useFormSubmit = (initialData: FormData, apiUrl: string) => {
  const [formData, setFormData] = useState<FormData>(initialData);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await postData(apiUrl, formData) as LoginResponse;

      if (response && response.access_token) {
        toast.success('Login successful! Redirecting...', {
          position: 'top-right',
          autoClose: 2000,
          hideProgressBar: false,
        });

        setAuthToken(response.access_token);
        if (response.user) {
          setUser(response.user);
        }

        setTimeout(() => {
          router.push('/dashboard');
        }, 1500);
      } else {
        toast.error(response.message || 'Login failed. Please check your credentials.', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
        });
      }
    } catch (error) {
      console.error('Login error:', error);
      toast.error('An error occurred. Please try again later.', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
      });
    } finally {
      setLoading(false);
    }
  };

  return { formData, loading, handleSubmit, handleChange };
};

export default useFormSubmit;


// // src/hooks/useFormSubmit.ts
// import { useState } from 'react';
// import { postData } from '../utils/api'; // Assuming postData function is available for API calls
// import { toast } from 'react-toastify';
// import { useRouter } from 'next/navigation';
// import { setAuthToken, setUser } from '../utils/auth';

// interface FormData {
//   username: string;
//   password: string;
// }

// interface User {
//   id: string;
//   username: string;
//   email: string;
//   // Add more user fields as needed
// }

// interface LoginResponse {
//   access_token?: string;
//   user?: any;
//   message?: string;
//   [key: string]: any;
// }

// const useFormSubmit = (initialData: FormData, apiUrl: string) => {
//   const [formData, setFormData] = useState<FormData>(initialData);
//   const [loading, setLoading] = useState<boolean>(false);
//   const router = useRouter();

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const response = await postData(apiUrl, formData) as LoginResponse;

//       // Check if the login was successful by verifying the response structure
//       if (response && response.access_token) {
//         toast.success('Login successful! Redirecting...', {
//           position: 'top-right',
//           autoClose: 2000,
//           hideProgressBar: false,
//         });

//         // Set the authentication token (if any) after successful login
//         setAuthToken(response.access_token);
//         console.log('Token after login:', response.access_token);

//         // Set user data if available
//         if (response.user) {
//           setUser(response.user); // Assuming response.user is the correct structure
//           console.log('User after login:', response.user); // Debugging user data
//         }

//         setTimeout(() => {
//           router.push('/dashboard'); // Redirect after login
//         }, 1500);

//       } else {
//         // Login failed, display error message
//         toast.error(response.message || 'Login failed. Please check your credentials.', {
//           position: 'top-right',
//           autoClose: 5000,
//           hideProgressBar: false,
//         });
//       }
//     } catch (error) {
//       // General error handling, catch any unexpected issues
//       console.error('Login error:', error);
//       toast.error('An error occurred. Please try again later.', {
//         position: 'top-right',
//         autoClose: 5000,
//         hideProgressBar: false,
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return { formData, loading, handleSubmit, handleChange };
// };

// export default useFormSubmit;

