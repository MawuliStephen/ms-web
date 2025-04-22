import React from 'react'
import Metadata from 'next/metadata'
import Head from 'next/head';
import IndexPage from './home/page';


const Home = () => {
  return (
    <div>
         <Head>
        <title>Default Title</title>
        <meta name="description" content="Default Description" />
      </Head>
      <IndexPage/>
    </div>
  )
}

export default Home