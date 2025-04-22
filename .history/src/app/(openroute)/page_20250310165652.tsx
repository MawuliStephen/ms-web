import React from 'react'
// import IndexPage from './home/page';
import IndexPage from './home/page';


// export const metadata = {
//     title: 'Home | My Next.js App',
//     description: 'Welcome to the home page of my Next.js app!',
//     openGraph: {
//       title: 'Home | My Next.js App',
//       description: 'Welcome to the home page of my Next.js app!',
//       images: '/images/home-og-image.jpg',
//     },
//   };
export const metadata = {
  title: 'Mawuli Stephen | Home | Software Engineer & Marketing Professional',
  description: 'Welcome to Mawuli Stephen’s homepage! Explore my expertise in software development, marketing, and creative solutions for businesses.',
  openGraph: {
    title: 'Mawuli Stephen | Home | Software Engineer & Marketing Professional',
    description: 'Welcome to Mawuli Stephen’s homepage! Explore my expertise in software development, marketing, and creative solutions for businesses.',
    images: '/images/home-og-image.jpg',
  },
};


export const metadata = {
  title: 'Mawuli Stephen | Home ',
  description: 'Welcome to the home page of my Next.js app!',
  openGraph: {
    title: 'Mawuli Stephen | Home | Software Engineer',
    description: 'Welcome to the home page of my Next.js app!',
    images: '/images/home-og-image.jpg',
  },
};
  

const Home = () => {
  return (
    <div>
      <IndexPage/>
    </div>
  )
}

export default Home