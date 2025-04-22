
import React from 'react'
import BlogPage from './blog'


export const metadata = {
  title: 'Mawuli Stephen | Home ',
  description: 'Welcome to the home page of my Next.js app!',
  keywords: 'Mawuli Stephen',
  openGraph: {
    title: 'Mawuli Stephen | Home | Software Engineer',
    description: 'Welcome to the home page of my Next.js app!',
    images: '/images/home-og-image.jpg',
  },
};

console.log(metadata)
  

const AboutPage = () => {
  return (
    <div>
      <BlogPage/>
    </div>
  )
}

export default Blog