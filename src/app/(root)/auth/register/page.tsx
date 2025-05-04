'use client'; // Mark this as a client-side component
import Register from '@/app/src/components/registerComponent';
import React from 'react'

const RegisterPage = () => {
  return (
    <div>
      <Register />
    </div>
  )
}

export default RegisterPage




// import { toast } from 'react-toastify';
// import React, { useState } from 'react';
// import { useRouter } from 'next/navigation'; // Use the correct router for the App directory
// import { postData } from '@/utils/api'; // Import the API utility

// const RegisterPage = () => {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const [loading, setLoading] = useState(false);
//   const router = useRouter();

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     setErrorMessage('');

//     try {
//       console.log('Registration attempt:', { username, email, password });
//       const response = await postData('/auth/register', { username, email, password });

//       console.log('Registration response:', response); // Log the response for debugging

//       if (response.message === 'User has been created successfully.') { // Assuming your API returns this message on success
//         toast.success('Registration successful! Redirecting...', {
//           position: 'top-right',
//           autoClose: 5000,
//           hideProgressBar: false,
//         });

//         setTimeout(() => {
//           router.push('/auth/login'); // Redirect to the login page
//         }, 2000);
//       } else {
//         toast.error(response.message || 'Registration failed. Please check your details.', {
//           position: 'top-right',
//           autoClose: 5000,
//           hideProgressBar: false,
//         });
//       }
//     } catch (error) {
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

//   return (
//     <div className="max-w-sm mx-auto py-20">
//       <h1 className='text-4xl md:text-5xl font-bold mb-4'>Sign Up</h1>
//       {errorMessage && <p className="text-red-500">{errorMessage}</p>}

//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label className="input input-bordered flex items-center gap-2">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 16 16"
//               fill="currentColor"
//               className="h-4 w-4 opacity-70"
//             >
//               <path
//                 d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
//                 clipRule="evenodd"
//               />
//             </svg>
//             <input
//               type="text"
//               className="grow"
//               placeholder="Username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               required
//             />
//           </label>
//         </div>

//         <div className="mb-4">
//           <label className="input input-bordered flex items-center gap-2">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 16 16"
//               fill="currentColor"
//               className="h-4 w-4 opacity-70"
//             >
//               <path
//                 d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z"
//               />
//               <path
//                 d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z"
//               />
//             </svg>
//             <input
//               type="email"
//               className="grow"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </label>
//         </div>

//         <div className="mb-4">
//           <label className="input input-bordered flex items-center gap-2">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 16 16"
//               fill="currentColor"
//               className="h-4 w-4 opacity-70"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
//                 clipRule="evenodd"
//               />
//             </svg>
//             <input
//               type="password"
//               className="grow"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </label>
//         </div>

//         <button type="submit" disabled={loading} className="w-full btn btn-primary">
//           {loading ? 'Registering...' : 'Register'}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default RegisterPage;
// // Compare this snippet from frontend/app/%28root%29/auth/register/page.tsx: