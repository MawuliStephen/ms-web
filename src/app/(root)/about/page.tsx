import React from 'react'
import  AboutPageContent  from './about'



export const metadata = { title: 'Mawuli Stephen | About ', 
  // description: 'Welcome to the home page of my Next.js app!',
   keywords: ['Mawuli Stephen','Node js developers in Ghana', 'Fullstack Developer','Best Developers in Ghana'], 
   openGraph: { title: 'Mawuli Stephen | Home | Software Engineer', 
    description: 'Highly skilled Software Engineer with 5 years of experience developing and maintaining scalable web and mobile applications. Proficient in Angular, React/Next.js, Flutter and Node.js.',
     images: '/images/s.jpg', }, };



function AboutPage() {
  return (
    <div>
      <AboutPageContent />
     
      {/* </SectionLayout> */}
    </div>
  )
}

export default AboutPage