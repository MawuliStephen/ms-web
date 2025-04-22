// 'use client';
// import { getCache, setCache, isCacheStale } from '../../../data/cache';
// import axiosInstance from '@/context/Authorization';
// import React, { useEffect, useState } from 'react';
// import Image from 'next/image'; // Use Next.js Image component
// import mawuli from '@/img/mawuli.jpg';
// import { useSearchParams } from 'next/navigation';
// import Link from 'next/link';
// const endPoint = process.env.NEXT_PUBLIC_BASE_URL;

// // Move this helper outside the component
// const getText = (html) => {
//   // Only parse HTML on the client side
//   if (typeof window === 'undefined') {
//     return html?.replace(/<[^>]*>/g, '') || '';
//   } else {
//     const doc = new DOMParser().parseFromString(html || '', "text/html");
//     return doc.body.textContent || '';
//   }
// };

// const Blog = () => {
//     const [posts, setPosts] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const searchParams = useSearchParams();
//     const cat = searchParams?.get('cat') || '';

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const cacheKey = `posts-${cat || 'all'}`;
//                 const cachedData = getCache(cacheKey);

//                 if (cachedData && !isCacheStale(cacheKey, 600)) {
//                     console.log('Using cached data');
//                     setPosts(cachedData);
//                     setLoading(false);
//                     return;
//                 }

//                 // Make sure the URL is properly formed
//                 const url = cat ? `/posts?cat=${cat}` : '/posts';
//                 const res = await axiosInstance.get(url);
//                 console.log("Fetched Data:", res.data);
//                 setPosts(res.data);
//                 setCache(cacheKey, res.data);
//             } catch (err) {
//                 console.error("API Fetch Error:", err.response ? err.response.data : err.message);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchData();
//     }, [cat]);

//     // Only render sorted posts if they exist
//     const sortedPosts = posts.length > 0 
//         ? [...posts].sort((a, b) => new Date(b.date) - new Date(a.date))
//         : [];

//     if (loading) {
//         return <div className="container py-10">Loading...</div>;
//     }


import { getCache, setCache, isCacheStale } from '../../../data/cache'; // Import cache utilities
import axiosInstance from '@/context/Authorization';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import mawuli from '@/img/mawuli.jpg';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
const endPoint = process.env.NEXT_PUBLIC_BASE_URL;

const getText = (html) => {
  if (typeof window === 'undefined') return html?.replace(/<[^>]*>/g, '') || '';
  const doc = new DOMParser().parseFromString(html || '', "text/html");
  return doc.body.textContent || '';
};

const Blog = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const searchParams = useSearchParams();
    // Safely get the category parameter
    const cat = typeof window !== 'undefined' ? searchParams?.get('cat') || '' : '';

    useEffect(() => {
        const fetchData = async () => {
            try {
                const cacheKey = `posts-${cat || 'all'}`;
                const cachedData = getCache(cacheKey);

                if (cachedData && !isCacheStale(cacheKey, 600)) {
                    setPosts(cachedData);
                    setLoading(false);
                    return;
                }

                const url = cat ? `/posts?cat=${cat}` : '/posts';
                const res = await axiosInstance.get(url);
                setPosts(res.data);
                setCache(cacheKey, res.data);
            } catch (err) {
                console.error("API Fetch Error:", err.response ? err.response.data : err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [cat]);

    const sortedPosts = posts.length > 0 
        ? [...posts].sort((a, b) => new Date(b.date) - new Date(a.date))
        : [];

    if (loading) {
        return <div className="container py-10">Loading...</div>;
    }

    return (
        <div className="home">
            <div className="section heroColor">
                <div className="container bg-blur-2">
                    <div className="hero">
                        <section className="hero-left">
                            <h1>Some pieces of words put together for your consumption</h1>
                            <p>
                                Combined 10 years of working experience as a Marketing professional and Software developer.
                            </p>
                        </section>
                        <section className="right">
                            {/* Use Next.js Image component for better performance */}
                            <Image 
                                src={mawuli} 
                                alt="Hero illustration" 
                                width={400} 
                                height={300} 
                                priority 
                            />
                        </section>
                    </div>
                </div>
            </div>

            <div className="posts container">
                {sortedPosts.length > 0 ? (
                    sortedPosts.map((post) => (
                        <div className="post" key={post.id}>
                            <div className="img">
                                {/* Handle image properly */}
                                <img 
                                    src={post.img?.startsWith('http') ? post.img : `${endPoint}/uploads/${post.img}`} 
                                    alt={post.title || 'Blog post image'} 
                                />
                            </div>
                            <div className="content">
                                <Link href={`/posts/${post.id}`} className="link">
                                    <h1>{post.title}</h1>
                                </Link>
                                <p>{getText(post.descrip)}</p>
                                <Link href={`/posts/${post.id}`}><button>Read More</button></Link>
                            </div>
                        </div>
                    ))
                ) : (
                    <div>No posts found</div>
                )}
            </div>
        </div>
    );
};

export default Blog;


// 'use client';
// import { getCache, setCache, isCacheStale } from '../../../data/cache'; // Import cache utilities
// import axiosInstance from '@/context/Authorization';
// import React, { useEffect, useState } from 'react';
// import mawuli from '@/img/mawuli.jpg'; // Ensure the image is in the public folder or use Next.js's static image handling
// import { useSearchParams } from 'next/navigation'; // Use useSearchParams for App Router
// import Link from 'next/link'; // Use Next.js Link
// const endPoint = process.env.NEXT_PUBLIC_BASE_URL;

// const Blog = () => {
//     const [posts, setPosts] = useState([]);
//     const [loading, setLoading] = useState(true); // Add loading state
//     const searchParams = useSearchParams(); // Get search params
//     const cat = searchParams.get('cat') || ''; // Get the 'cat' query parameter

//     const sortedPosts = posts.sort((a, b) => new Date(b.date) - new Date(a.date));

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const cacheKey = `posts-${cat || 'all'}`; // Unique cache key based on category
//                 const cachedData = getCache(cacheKey); // Get cached data

//                 // Use cached data if it exists and is not stale
//                 if (cachedData && !isCacheStale(cacheKey, 600)) { // 600 seconds = 10 minutes
//                     console.log('Using cached data');
//                     setPosts(cachedData);
//                     setLoading(false);
//                     return;
//                 }

//                 // Fetch fresh data from the API
//                 const res = await axiosInstance.get(`/posts${cat}`);
//                 console.log("Fetched Data:", res.data); // Log response data
//                 setPosts(res.data);
//                 setCache(cacheKey, res.data); // Update cache with fresh data
//             } catch (err) {
//                 console.error("API Fetch Error:", err.response ? err.response.data : err.message);
//             } finally {
//                 setLoading(false); // Ensure loading is set to false after fetch
//             }
//         };

//         fetchData();
//     }, [cat]);

//     const getText = (html) => {
//         const doc = new DOMParser().parseFromString(html, "text/html");
//         return doc.body.textContent;
//     };

//     if (loading) {
//         return <div>Loading...</div>; // Display loading state
//     }

//     return (
//         <div className="home">
//             <div className="section heroColor">
//                 <div className="container bg-blur-2">
//                     <div className="hero">
//                         <section className="hero-left">
//                             <h1>Some pieces of words put together for your consumption</h1>
//                             <p>
//                                 Combined 10 years of working experience as a Marketing professional and Software developer.
//                             </p>
//                         </section>
//                         <section className="right">
//                             <img src={mawuli} alt="Hero illustration" />
//                         </section>
//                     </div>
//                 </div>
//             </div>

//             <div className="posts container">
//                 {sortedPosts.map((post) => (
//                     <div className="post" key={post.id}>
//                         <div className="img">
//                             {/* <img src={`${endPoint}uploads/${post.img}`} alt={post.title} /> */}
//                             <img src={`${post.img}`} alt={post.title} />
//                         </div>
//                         <div className="content">
//                             <Link href={`/posts/${post.id}`} className="link">
//                                 <h1>{post.title}</h1>
//                             </Link>
//                             <p>{getText(post.descrip)}</p>
//                             <Link href={`/posts/${post.id}`}><button>Read More</button></Link>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Blog;


// // 'use client';
// // import { getCache, setCache, isCacheStale } from '../../../data/cache'; // Import cache utilities
// // import axiosInstance from '@/context/Authorization';
// // import React, { useEffect, useState } from 'react';
// // import { useRouter } from 'next/router'; // Use Next.js router
// // import Link from 'next/link'; // Use Next.js Link

// // const Blog = () => {
// //     const [posts, setPosts] = useState([]);
// //     const [loading, setLoading] = useState(true); // Add loading state
// //     const router = useRouter();
// //     const cat = router.query.cat || ''; // Get query parameter from the URL

// //     const sortedPosts = posts.sort((a, b) => new Date(b.date) - new Date(a.date));

// //     useEffect(() => {
// //         const fetchData = async () => {
// //             try {
// //                 const cacheKey = `posts-${cat || 'all'}`; // Unique cache key based on category
// //                 const cachedData = getCache(cacheKey); // Get cached data

// //                 // Use cached data if it exists and is not stale
// //                 if (cachedData && !isCacheStale(cacheKey, 600)) { // 600 seconds = 10 minutes
// //                     console.log('Using cached data');
// //                     setPosts(cachedData);
// //                     setLoading(false);
// //                     return;
// //                 }

// //                 // Fetch fresh data from the API
// //                 const res = await axiosInstance.get(`/posts${cat}`);
// //                 console.log("Fetched Data:", res.data); // Log response data
// //                 setPosts(res.data);
// //                 setCache(cacheKey, res.data); // Update cache with fresh data
// //             } catch (err) {
// //                 console.error("API Fetch Error:", err.response ? err.response.data : err.message);
// //             } finally {
// //                 setLoading(false); // Ensure loading is set to false after fetch
// //             }
// //         };

// //         fetchData();
// //     }, [cat]);

// //     const getText = (html) => {
// //         const doc = new DOMParser().parseFromString(html, "text/html");
// //         return doc.body.textContent;
// //     };

// //     if (loading) {
// //         return <div>Loading...</div>; // Display loading state
// //     }

// //     return (
// //         <div className="home">
// //             <div className="section heroColor">
// //                 <div className="container bg-blur-2">
// //                     <div className="hero">
// //                         <section className="hero-left">
// //                             <h1>Some pieces of words put together for your consumption</h1>
// //                             <p>
// //                                 Combined 10 years of working experience as a Marketing professional and Software developer.
// //                             </p>
// //                         </section>
// //                         <section className="right">
// //                             <img src={mawuli} alt="Hero illustration" />
// //                         </section>
// //                     </div>
// //                 </div>
// //             </div>

// //             <div className="posts container">
// //                 {sortedPosts.map((post) => (
// //                     <div className="post" key={post.id}>
// //                         <div className="img">
// //                             <img src={`${endPoint}uploads/${post.img}`} alt={post.title} />
// //                         </div>
// //                         <div className="content">
// //                             <Link href={`/posts/${post.id}`} className="link">
// //                                 <h1>{post.title}</h1>
// //                             </Link>
// //                             <p>{getText(post.descrip)}</p>
// //                             <Link href={`/posts/${post.id}`}><button>Read More</button></Link>
// //                         </div>
// //                     </div>
// //                 ))}
// //             </div>
// //         </div>
// //     );
// // };

// // export default Blog;