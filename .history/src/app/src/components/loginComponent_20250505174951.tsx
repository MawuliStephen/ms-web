// src/components/LoginPage.tsx
'use client';
import React from 'react';
import { SectionLayout } from '../../(root)/components/navigations/section-layout';
import useFormSubmit from '../hooks/useFormSubmit';

const Login = () => {
  const { formData, loading, handleSubmit, handleChange } = useFormSubmit(
    { username: '', password: '' },
    '/auth/login'
  );

  return (
    <SectionLayout id="login" className="py-20" hasBackdrop={false}>
      <div className="max-w-sm mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center text-foreground">
          Welcome Back
        </h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-foreground/80">
              Username
            </label>
            <div className="relative">
              <input
                type="text"
                name="username"
                className="w-full px-4 py-3 rounded-lg border border-border bg-surface text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                placeholder="Enter your username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-foreground/80">
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                name="password"
                className="w-full px-4 py-3 rounded-lg border border-border bg-surface text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full px-6 py-3  btn font-medium transition-all ${
              loading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-primary-dark hover:shadow-md'
            }`}
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <span className="animate-spin h-5 w-5 border-2 border-white/30 border-t-white rounded-full" />
                Logging in...
              </span>
            ) : (
              'Login'
            )}
          </button>

          <div className="text-center text-sm  pr-3 text-muted-foreground">
            Don't have an account?{' '}
            <a href="/register" className="text-primary hover:underline">
              Sign up
            </a>
          </div>
        </form>
      </div>
    </SectionLayout>
  );
};

export default Login;

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
