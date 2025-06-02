import React, { useState, useEffect } from 'react';
import { getCache, setCache, isCacheStale } from './cache'; // Import cache utilities
// import axiosInstance from '@/context/Authorization';
import { useRouter } from 'next/router';

const endPoint = process.env.NEXT_PUBLIC_BASE_URL;

const GetAllPosts = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    const cat = router.query.cat || '';
    const cacheKey = `posts-${cat || 'all'}`; // Unique cache key based on category

    // Fetch data from API or cache
    useEffect(() => {
        const fetchData = async () => {
            try {
                const cachedData = getCache(cacheKey); // Get cached data

                // Use cached data if it exists and is not stale
                if (cachedData && !isCacheStale(cacheKey, 600)) { // 600 seconds = 10 minutes
                    console.log('Using cached data');
                    setPosts(cachedData);
                    setLoading(false);
                    return;
                }

                // Fetch fresh data from the API
                console.log('Fetching fresh data');
                const res = await axiosInstance.get(`${endPoint}posts${cat}`);
                const sortedPosts = res.data.sort(
                    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
                );

                // Update state and cache
                setPosts(sortedPosts);
                setCache(cacheKey, sortedPosts);
            } catch (err) {
                console.error('API Fetch Error:', err.response ? err.response.data : err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [cacheKey, cat]);

    const getText = (html) => {
        const doc = new DOMParser().parseFromString(html, 'text/html');
        return doc.body.textContent || '';
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h1>Posts</h1>
            {posts.length > 0 ? (
                <ul>
                    {posts.map((post) => (
                        <li key={post.id}>
                            <h2>{post.title}</h2>
                            <p>{getText(post.content)}</p>
                            <small>{new Date(post.date).toLocaleDateString()}</small>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No posts found.</p>
            )}
        </div>
    );
};

export default GetAllPosts;

// import { getCache, setCache } from "./cache";
// import axiosInstance from "@/context/Authorization";
// const endPoint = process.env.NEXT_PUBLIC_BASE_URL

// import React from 'react'

// const GetAllPosts = () => {
//     const [posts, setPosts] = useState([]);
//     const cacheKey = 'externalApiData';

//     // Check if data is in cache
//     const cachedData = getCache(cacheKey);
//     if (cachedData) {
//       return res.status(200).json(cachedData);
//     }
  

//     const sortedPosts = posts.sort((a, b) => new Date(b.date) - new Date(a.date));

//     const cat = router.query.cat || ''; // Get category from query params
//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const res = await axiosInstance.get(`${endPoint}posts${cat}`);
//                 console.log("Fetched Data:", res.data);  // Log response data
//                 setPosts(res.data);
//             } catch (err) {
//                 console.error("API Fetch Error:", err.response ? err.response.data : err.message);
//             }
//         };
//         fetchData();
//     }, [cat]);
    

//     const getText = (html) => {
//         const doc = new DOMParser().parseFromString(html, "text/html")
//         return doc.body.textContent
//     }

//   return (
//     <div>

//     </div>
//   )
// }

// export default GetAllPosts