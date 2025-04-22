import BlogWrapper from './BlogWrapper';

export const metadata = {
  title: 'Mawuli Stephen | Blog ',
  description: 'Welcome to the home page of my Next.js app!',
  keywords: 'Mawuli Stephen',
  openGraph: {
    title: 'Mawuli Stephen | Home | Software Engineer',
    description: 'Welcome to the home page of my Next.js app!',
    images: '/images/home-og-image.jpg',
  },
};

export default function Blog() {
  return <BlogWrapper />;
}


// import React from 'react'
// import dynamic from 'next/dynamic'

// export const metadata = {
//   title: 'Mawuli Stephen | Blog ',
//   description: 'Welcome to the home page of my Next.js app!',
//   keywords: 'Mawuli Stephen',
//   openGraph: {
//     title: 'Mawuli Stephen | Home | Software Engineer',
//     description: 'Welcome to the home page of my Next.js app!',
//     images: '/images/home-og-image.jpg',
//   },
// };

// // Dynamically import the BlogPage component with SSR disabled
// const BlogPage = dynamic(() => import('./blog'), {
//   ssr: false
// });

// const Blog = () => {
//   return (
//     <div>
//       <Blog/>
//     </div>
//   )
// }

// export default Blog


// // import React from 'react'
// // import BlogPage from './blog'


// // export const metadata = {
// //   title: 'Mawuli Stephen | Blog ',
// //   description: 'Welcome to the home page of my Next.js app!',
// //   keywords: 'Mawuli Stephen',
// //   openGraph: {
// //     title: 'Mawuli Stephen | Home | Software Engineer',
// //     description: 'Welcome to the home page of my Next.js app!',
// //     images: '/images/home-og-image.jpg',
// //   },
// // };

// // console.log(metadata)


// // const Blog = () => {
// //   return (
// //     <div>
// //       <BlogPage/>
// //     </div>
// //   )
// // }

// // export default Blog
