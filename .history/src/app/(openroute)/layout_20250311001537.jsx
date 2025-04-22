import React from 'react';
import Head from 'next/head';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Default Title</title>
        <meta name="description" content="Default Description" />
      </Head>
      <Navbar />
      {/* Remove pageProps since it's not JSX */}
      {children}
      <Footer />
    </div>
  );
};

export default Layout;


// // app/openroute/layout.tsx

//   import React from 'react'
  
// import Footer from '../components/Footer'
// import Navbar from '../components/Navbar'
  
//   const Layout = ({ children }: { children: React.ReactNode }) => {
//     return (
//       <div>
//         <Navbar/>

//         {children}

//         <Footer />

//       </div>
//     )
//   }
  
//   export default Layout