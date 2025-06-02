// app/error.tsx (for app directory structure in Next.js 13+)
'use client'; // Mark as client-side component

import React from 'react';
import { useRouter } from 'next/navigation';

type ErrorProps = {
  error: Error;
  reset: () => void;
};

const ErrorPage = ({ error, reset }: ErrorProps) => {
  const router = useRouter();

  const handleReset = () => {
    // Reset the error boundary state or navigate to a different page
    reset();
    router.push('/');  // Redirect to the home page or any other page
  };

  return (
    <div className="error-page">
      <h1 className="text-4xl font-bold">Something went wrong</h1>
      <p className="text-red-500">{error.message}</p>
      <button onClick={handleReset} className="btn btn-primary mt-4">
        Try Again
      </button>
    </div>
  );
};

export default ErrorPage;
