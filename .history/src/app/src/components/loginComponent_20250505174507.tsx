

// // src/components/LoginPage.tsx
// 'use client';
// import React from 'react';
// import useFormSubmit from '../hooks/useFormSubmit';

// const Login = () => {
//   const { formData, loading, handleSubmit, handleChange } = useFormSubmit (
//     { username: '', password: '' },
//     '/auth/login'
//   );

//   return (

//     <div className="max-w-sm mx-auto py-20">
//       <h1 className="text-4xl md:text-5xl font-bold mb-4">Login</h1>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label className="input input-bordered flex items-center gap-2">
//             <input
//               type="text"
//               name="username"
//               className="grow"
//               placeholder="Username"
//               value={formData.username}
//               onChange={handleChange}
//               required
//             />
//           </label>
//         </div>
//         <div className="mb-4">
//           <label className="input input-bordered flex items-center gap-2">
//             <input
//               type="password"
//               name="password"
//               className="grow"
//               placeholder="Password"
//               value={formData.password}
//               onChange={handleChange}
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

// export default Login;
