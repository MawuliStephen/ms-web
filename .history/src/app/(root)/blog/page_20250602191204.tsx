// ./src/app/(root)/blog/page.tsx
import React, { Suspense } from 'react';
import Blog from './Blog';

const BlogPage = () => {
  return (
    <Suspense fallback={<div>Loading blog...</div>}>
      <Blog />
    </Suspense>
  );
};

export default BlogPage;
