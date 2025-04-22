// app/openroute/layout.tsx

  import React from 'react'
  import Head from 'next/head';
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
  
  const Layout = ({ children, pageProps}: { children: React.ReactNode }) => {
    return (
      <div>
        <Head>
        <title>Default Title</title>
        <meta name="description" content="Default Description" />
      </Head>
        <Navbar/>

        {children}

        <Footer />

      </div>
    )
  }
  
  export default Layout