import React from 'react';
import Image from 'next/image';
import GradientHeading from './gradient';

const HeroSection = () => {
  return (
    <section className=" ">
      {/* <div className="container mx-auto px-6 py-20 md:py-28 lg:py-36"> */}
      {/* <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-28 lg:py-36"> */}
      <div className=" w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-28 lg:py-36">

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 text-center lg:text-left">
            

            <GradientHeading/>

     

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0">
              I am a software engineer and marketing expert who loves to create solutions for people and businesses.
            </p>

           
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <button className="btn  transition">
                About Me
              </button>
              <button className=" btn-outline   transition">
                We Can Talk
              </button>
            </div>
          </div>

          {/* Hero Media */}

          <div className="relative aspect-video w-full rounded-3xl overflow-hidden shadow-xl bg-gradient-to-br from-primary/10 via-muted/30 to-transparent backdrop-blur-sm border border-white/10">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black/30 to-transparent z-10" />

            {/* Viby Hero Image */}
            <Image
              src="/mawuli.jpg"
              alt="Hero visual"
              fill
              className="object-cover scale-105 transition-transform duration-1000 ease-in-out hover:scale-110 z-0"
              priority
            />


            {/* Optional decorative overlay */}
            <div className="absolute inset-0 bg-black/20 mix-blend-multiply pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

// import React from 'react'

// const HeroSection = () => {
//     return (
//         <div>
//             <section className="relative bg-background overflow-hidden">
//                 {/* <!-- Background shape (optional) --> */}
//                 <div className="absolute inset-0 bg-primary/5 -z-10">
//                     <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
//                 </div>

//                 <div className="w-full px-8 pt-8 container">
//                     <div className="flex flex-col lg:flex-row items-center gap-12">
//                         {/* <!-- Text content --> */}
//                         <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
//                             <span className="inline-block px-3 py-1 text-sm font-mono bg-primary/10 text-primary rounded-full">
//                                 New Feature
//                             </span>
//                             <h1 className="title">
//                             An <span className="text-primary">Experience </span>software Engineer and marketing Expert
//                                 {/* Build <span className="text-primary">amazing</span> digital experiences */}
//                             </h1>
//                             <p className="body-text-lg max-w-2xl mx-auto lg:mx-0">
//                             {/* who loves to create solutions for people and businesses. */}
//                             Combined 10 years of working experience as a Marketing professional and Software developer
//                                 {/* Our platform helps you create beautiful, accessible websites faster than ever before.
//                                 Powered by cutting-edge technology and designer-approved templates. */}
//                             </p>
//                             <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
//                                 <button className="btn px-8 ">
//                                     Get Started
//                                 </button>
//                                 <button className="px-8  border-2 border-foreground/10 hover:border-primary transition-colors">
//                                     Learn More
//                                 </button>
//                             </div>
//                         </div>

//                         {/* <!-- Hero image/video --> */}
//                         <div className="lg:w-1/2 relative">
//                             <div className="relative aspect-video w-full bg-gradient-to-br from-primary to-primaryContrast rounded-2xl overflow-hidden shadow-xl">
//                                 {/* <!-- Placeholder for your image/video --> */}
//                                 <div className="absolute inset-0 flex items-center justify-center text-white">
//                                     <svg className="w-1/3 h-1/3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
//                                         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
//                                     </svg>
//                                 </div>
//                             </div>

//                             {/* <!-- Decorative elements (optional) --> */}
//                             <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-full -z-10"></div>
//                             <div className="absolute -top-6 -right-6 w-24 h-24 bg-primaryContrast/20 rounded-full -z-10"></div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//          </div>
//     )
// }

// export default HeroSection