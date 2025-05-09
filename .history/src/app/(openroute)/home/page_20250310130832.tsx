// import React, { useState, useEffect } from 'react';
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
// import GetAllPosts from '@/data/posts';
// import { useRouter } from 'next/router'; // Replace useLocation from react-router-dom
// import axiosInstance from '@/context/Authorization';
import mawuli from '@/img/mawuli.jpg'; // Ensure the image is in the public folder or use Next.js's static image handling


// const endPoint = process.env.NEXT_PUBLIC_BASE_URL;

export const metadata = {
  title: 'Mawuli Stephen | Home ',
  description: 'Welcome to the home page of my Next.js app!',
  openGraph: {
    title: 'Mawuli Stephen | Home | Software Engineer',
    description: 'Welcome to the home page of my Next.js app!',
    images: '/images/home-og-image.jpg',
  },
};

interface Post {
  id: string;
  title: string;
  descrip: string;
  img: string;
  date: string;
}

interface IndexPageProps {
  initialPosts: Post[];
}

const IndexPage = ({ initialPosts }: IndexPageProps) => {
  // const [posts, setPosts] = useState(initialPosts || []);
  // const router = useRouter(); // Use Next.js's useRouter instead of useLocation
  // const cat = router.query.cat || ''; // Get category from query params
  // const limit = 4;

  // // Sort posts from new to old and limit the number of posts
  // const sortedPosts = posts.sort((a, b) => new Date(b.date) - new Date(a.date));
  // const limitedPosts = sortedPosts.slice(0, limit);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await axiosInstance.get(`${endPoint}posts${cat}`);
  //       setPosts(res.data);
  //     } catch (err) {
  //       console.error('Error fetching data:', err);
  //     }
  //   };
  //   fetchData();
  // }, [cat]);

  // const getText = (html) => {
  //   const doc = new DOMParser().parseFromString(html, 'text/html');
  //   return doc.body.textContent;
  // };

  return (
    <div className="home bg-blur-2">
      <section className="hero container">
        <div className="container">

          <div className="section-blur section">
            <hr />
            <hr />
            <hr />

            <div className="hero">
              <section className="hero-left">
                <h1>A versatile individual who loves to create solutions for people and businesses.</h1>
                <p>
                  Combined 10 years of working experience as a Marketing professional and Software developer
                </p>
                <Link href="/about">
                  <button className="primary">Read More</button>
                </Link>
              </section>
              {/* <section className="right">
             
                  <Image src={mawuli} alt="Mawuli" width={0} height={0}   className="custom-image" />
                
              </section> */}
              <section className="right">
    
                <div className="image-wrapper">
                  {/* <Image src={mawuli} alt="Mawuli"  /> */}
                  <Image src={mawuli} alt="Mawuli"   className="custom-image" />
                 
                </div>

                {/* <Image src={mawuli} alt="Mawuli" width={0} height={0}   className="custom-image" /> */}

              </section>

               

            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ backgroundColor: '#b9e7e7' }}>
        {/* <div className="container pt-8">
          <Projects/>
        </div> */}
        <div className="middle section container">
          <div className="heoColor">
            <div className="col text-start" style={{ padding: '10px' }}>
              <h3>Expertise & Hobbies</h3>
              <div className="row">
                <div className="col">
                  <div className="bg-blur-2" style={{ position: 'relative' }}>
                    <button>Web development</button>
                    <button>UI/Ux design</button>
                    <button>Sales</button>
                    <button>Advertising</button>
                    <button>Guitar</button>
                    <button>Writing</button>
                    <button>Poetry</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="mb-4 subtitle">
          <h3 className="text-start">Recent Write-ups</h3>
          <Link href="/blog">Read More</Link>
        </div>

        {/* <GetAllPosts/> */}

        {/* <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3">
          {limitedPosts.map((post) => (
            <div key={post.id} className="blog-card content post" style={{ marginBottom: '20px' }}>
              <Image
                className="blog-img"
                src={`${endPoint}uploads/${post.img}`}
                alt={post.title}
                width={300}
                height={200}
              />
              <div className="text-overlay">
                <h4 className="text-bold">{post.title.substring(0, 30)}</h4>
                <p>{getText(post.descrip).substring(0, 150)}</p>
                <Link href={`/posts/${post.id}`}>
                  <button className="primary" style={{ padding: '5px' }}>Read More</button>
                </Link>
              </div>
            </div>
          ))} 
        </div>
        */}
      </div>
    </div>
  );
};

// Fetch data server-side using getServerSideProps or getStaticProps
// export async function getServerSideProps(context) {
//   try {
//     const { query } = context;
//     const cat = query.cat || '';
//     const res = await axiosInstance.get(`${endPoint}posts${cat}`);
//     const initialPosts = res.data;
//     return {
//       props: {
//         initialPosts,
//       },
//     };
//   } catch (err) {
//     console.error('Error fetching data:', err);
//     return {
//       props: {
//         initialPosts: [],
//       },
//     };
//   }
// }

export default IndexPage;

const IndexPage = ({ initialPosts }: IndexPageProps) => {

  return (
    <div className="home bg-blur-2">
      <section className="hero container">
        <div className="container">

          <div className="section-blur section">
            <hr />
            <hr />
            <hr />

            <div className="hero">
              <section className="hero-left">
                <h1>A versatile individual who loves to create solutions for people and businesses.</h1>
                <p>
                  Combined 10 years of working experience as a Marketing professional and Software developer
                </p>
                <Link href="/about">
                  <button className="primary">Read More</button>
                </Link>
              </section>
              {/* <section className="right">
             
                  <Image src={mawuli} alt="Mawuli" width={0} height={0}   className="custom-image" />
                
              </section> */}
              <section className="right">
    
                <div className="image-wrapper">
                  {/* <Image src={mawuli} alt="Mawuli"  /> */}
                  <Image src={mawuli} alt="Mawuli"   className="custom-image" />
                 
                </div>

                {/* <Image src={mawuli} alt="Mawuli" width={0} height={0}   className="custom-image" /> */}

              </section>

               

            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ backgroundColor: '#b9e7e7' }}>
        {/* <div className="container pt-8">
          <Projects/>
        </div> */}
        <div className="middle section container">
          <div className="heoColor">
            <div className="col text-start" style={{ padding: '10px' }}>
              <h3>Expertise & Hobbies</h3>
              <div className="row">
                <div className="col">
                  <div className="bg-blur-2" style={{ position: 'relative' }}>
                    <button>Web development</button>
                    <button>UI/Ux design</button>
                    <button>Sales</button>
                    <button>Advertising</button>
                    <button>Guitar</button>
                    <button>Writing</button>
                    <button>Poetry</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="mb-4 subtitle">
          <h3 className="text-start">Recent Write-ups</h3>
          <Link href="/blog">Read More</Link>
        </div>

        {/* <GetAllPosts/> */}

        { <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3">
          {limitedPosts.map((post) => (
            <div key={post.id} className="blog-card content post" style={{ marginBottom: '20px' }}>
              <Image
                className="blog-img"
                src={`${endPoint}uploads/${post.img}`}
                alt={post.title}
                width={300}
                height={200}
              />
              <div className="text-overlay">
                <h4 className="text-bold">{post.title.substring(0, 30)}</h4>
                <p>{getText(post.descrip).substring(0, 150)}</p>
                <Link href={`/posts/${post.id}`}>
                  <button className="primary" style={{ padding: '5px' }}>Read More</button>
                </Link>
              </div>
            </div>
          ))} 
        </div>
        
      </div>
    </div>
  );
};
  export default IndexPage;
