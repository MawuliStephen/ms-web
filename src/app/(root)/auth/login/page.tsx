'use client'; // Mark this as a client-side component
import Login from '@/app/src/components/loginComponent'
import React from 'react'

const LoginPage = () => {
  return (
    <div className="max-w-sm mx-auto py-20">
      <Login />
    </div>
  )
}

export default LoginPage

// 'use client'; // Mark this as a client-side component
// import React, { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { toast } from 'react-toastify';
// import { postData } from '@/utils/api';
// import { setAuthToken } from '@/utils/auth';

// const LoginPage = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [loading, setLoading] = useState(false);
//   const router = useRouter();

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       // console.log('Login attempt:', { username, password });
//       const response = await postData('/auth/login', { username, password });

//       if (response.message === 'Login successful!') {
//         toast.success('Login successful! Redirecting...', {
//           position: 'top-right',
//           autoClose: 2000,
//           hideProgressBar: false,
//         });

//         // Set the token after successful login
//         if (response.access_token) {
//           setAuthToken(response.access_token);
//           // console.log('Token after login:', response.access_token); // Log token from response
//         }

//         // Redirect to the dashboard after a short delay
//         setTimeout(() => {
//           router.push('/dashboard');
//         }, 2000);
//       } else {
//         toast.error(response.message || 'Login failed. Please check your credentials.', {
//           position: 'top-right',
//           autoClose: 5000,
//           hideProgressBar: false,
//         });
//       }
//     } catch (error) {
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

//   return (
//     <div className="max-w-sm mx-auto py-20">
//       <h1 className="text-4xl md:text-5xl font-bold mb-4">Login</h1>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label className="input input-bordered flex items-center gap-2">
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
//           {loading ? 'Logging in...' : 'Login'}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default LoginPage;
