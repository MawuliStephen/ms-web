'use client';
import React from 'react';
// import useRegisterForm from '../hooks/useRegisterForm';
import useRegisterForm from '../hooks/userRegisterForm';

const Register = () => {
  const { formData, loading, handleSubmit, handleChange } = useRegisterForm(
    { username: '', password: '', email: '' },
    '/auth/register'
  );

  return (
    <div className="max-w-sm mx-auto py-20">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Register</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              name="username"
              className="grow"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="email"
              name="email"
              className="grow"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="password"
              name="password"
              className="grow"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <button type="submit" disabled={loading} className="w-full btn btn-primary">
          {loading ? 'Creating ...' : 'Register'}
        </button>
      </form>
    </div>
  );
};

export default Register;
