'use client';

import dynamic from 'next/dynamic';

const BlogPage = dynamic(() => import('./blog'), { 
  ssr: false 
});

export default function BlogWrapper() {
  return <BlogPage />;
}