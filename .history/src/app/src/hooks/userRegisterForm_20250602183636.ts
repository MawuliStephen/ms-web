import React, { useState } from 'react';
import { postData } from '../utils/api'; // Assuming postData function is available for API calls
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { setAuthToken, setUser } from '../utils/auth';

interface FormData {
  username: string;
  password: string;
  email: string;
}

interface RegisterResponse {
  access_token?: string;
  user?: any;
  message?: string;
  [key: string]: any;
}

const useRegisterForm = (initialData: FormData, apiUrl: string) => {
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
      const response = await postData(apiUrl, formData) as RegisterResponse;

      if (response && response.access_token) {
        toast.success('Registration successful! Redirecting...', {
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
        toast.error(response.message || 'Registration failed. Please check your credentials.', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
        });
      }
    } catch (error) {
      console.error('Registration error:', error);
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

export default useRegisterForm;












// // src/hooks/useRegisterForm.ts
// import React from 'react';
// import { useState } from 'react';
// import { postData } from '../utils/api'; // Assuming postData function is available for API calls
// import { toast } from 'react-toastify';
// import { useRouter } from 'next/navigation';
// import { setAuthToken, setUser } from '../utils/auth';

// interface FormData {
//   username: string;
//   password: string;
//   email: string;
// }

// const formData = (initialData: FormData, apiUrl: string) => {
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
//       const response = await postData(apiUrl, formData);
      
//       // Check if the Registration was successful by verifying the response structure
//       if (response && response.access_token) {
//         toast.success('Registration successful! Redirecting...', {
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
//         // Registration failed, display error message
//         toast.error(response.message || 'Registration failed. Please check your credentials.', {
//           position: 'top-right',
//           autoClose: 5000,
//           hideProgressBar: false,
//         });
//       }
//     } catch (error) {
//       // General error handling, catch any unexpected issues
//       console.error('Registration error:', error);
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

// export default formData;
