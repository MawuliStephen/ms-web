'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getCache, setCache, isCacheStale } from '../../../data/cache'; // Import cache utilities
import axiosInstance from '@/context/Authorization';


const BlogPage = () => {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const sortedPosts = posts.sort((a, b) => new Date(b.date) - new Date(a.date));
  
    // Fetch data from API or cache
    useEffect(() => {
      const fetchData = async () => {
        try {
          const cacheKey = 'posts-all'; // Unique cache key
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
          const res = await axiosInstance.get(`${endPoint}posts`);
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
    }, []);
  
    const getText = (html) => {
      const doc = new DOMParser().parseFromString(html, 'text/html');
      return doc.body.textContent || '';
    };
  
    if (loading) {
      return <p>Loading...</p>;
    }


    return (
        <div>

            
         
            <h1>BlogPage</h1>
        </div>
    );
};

export default BlogPage;
