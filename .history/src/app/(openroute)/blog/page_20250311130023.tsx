
import React from 'react'
import BlogPage from './blog'


export const metadata = {
  title: 'Mawuli Stephen | Home ',
  description: 'Welcome to the home page of my Next.js app!',
  keywords: ''
  openGraph: {
    title: 'Mawuli Stephen | Home | Software Engineer',
    description: 'Welcome to the home page of my Next.js app!',
    images: '/images/home-og-image.jpg',
  },
};

console.log(metadata)
  

const Blog = () => {
  return (
    <div>
      <BlogPage/>
    </div>
  )
}

export default Blog


// 'use client'
// import React from 'react';
// import Head from 'next/head';
// import Metadata from '../../../utils/metadata';

// const BlogPage = () => {
//     const meta = Metadata({
//         title: 'Mawuli Stephen | Blog',
//         description: 'Welcome to the blog page of my Next.js app!',
//         openGraph: {
//             title: 'Mawuli Stephen | Blog | Software Engineer',
//             description: 'Welcome to the blog page of my Next.js app!',
//             images: ['/images/blog-og-image.jpg'], // ✅ Pass images as an array
//             url: 'https://www.mawulistephen.com/blog',
//         },
//     });

//     console.log("Generated Metadata:", meta); // ✅ Log metadata

//     return (
//         <div>
//             <Head>
//                 <title>{meta.title}</title>
//                 <meta name="description" content={meta.description} />
//                 <meta property="og:title" content={meta.openGraph.title} />
//                 <meta property="og:description" content={meta.openGraph.description} />
//                 {meta.openGraph.images.length > 0 && (
//                     <meta property="og:image" content={meta.openGraph.images[0].url} />
//                 )}
//                 <meta property="og:url" content={meta.openGraph.url} />
//             </Head>
//             <h1>BlogPage</h1>
//         </div>
//     );
// };

// export default BlogPage;
