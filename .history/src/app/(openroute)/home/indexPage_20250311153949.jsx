
'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getCache, setCache, isCacheStale } from '../../../data/cache'; // Import cache utilities
import axiosInstance from '@/context/Authorization';
import mawuli from '@/img/mawuli.jpg'; // Ensure the image is in the public folder or use Next.js's static image handling



const IndexPage = () => {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

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

    const limitedPosts = posts.slice(0, 3); // Show only the first 3 posts

    return (
        <div className="home ">
            {/* <Head>
                <script type="application/ld+json">
                    {JSON.stringify(structuredData)}
                </script>
            </Head> */}
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
                            <section className="right">
                                <div className="image-wrapper">
                                    {/* <Image src={mawuli} alt="Mawuli" className="custom-image" width={300} height={400} /> */}
                                    <Image src={mawuli} alt="Mawuli" width={0} height={0} className="custom-image" />

                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container" style={{ backgroundColor: '#b9e7e7' }}>
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

                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3">
                    {limitedPosts.map((post) => (
                        <div key={post.id} className="blog-card content post" style={{ marginBottom: '20px' }}>
                            <Image
                                className="blog-img"
                                src={`${endPoint}uploads/${post.img}`}
                                alt={post.title}
                                width={300}
                                height={200}
                            />
                            
                            <img src={`${post.img}`} alt={post.title} />

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