
'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

import { getCache, setCache, isCacheStale } from '../../../data/cache';
import { SectionLayout, } from './../components/navigations/section-layout';
// SectionHeader
import { getData } from '@/app/src/utils/api';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

// Post type definition
type Post = {
  id: number;
  title: string;
  descrip: string;
  img?: string;
  date: string;
};

const getText = (html: string = ''): string => {
  if (typeof window === 'undefined') return html.replace(/<[^>]*>/g, '');
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  return doc.body.textContent || '';
};

const Blog = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const searchParams = useSearchParams();
  const cat = typeof window !== 'undefined' ? searchParams?.get('cat') || '' : '';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cacheKey = `blog-posts::cat=${cat || 'all'}`;
        const cachedData = getCache(cacheKey);

        if (cachedData && !isCacheStale(cacheKey, 600)) {
          setPosts(cachedData);
          setLoading(false);
          return;
        }

        const url = cat ? `${baseUrl}/posts?cat=${cat}` : '/posts';
        console.log("blog post:", url);
        const res = await getData(url) as { data: Post[] };
        setPosts(res.data);
        setCache(cacheKey, res.data);
      }      catch (err: unknown) {
        if (err instanceof Error) {
          console.error("API Fetch Error:", err.message);
        } else {
          console.error("API Fetch Error:", JSON.stringify(err));
        }
        setError(true);
      
    } finally {
      setLoading(false);
    }
  };

  fetchData();
}, [cat]);

const sortedPosts = posts.length > 0
  ? [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  : [];

if (loading) {
  return <div className="container py-10">Loading...</div>;
}

if (error) {
  return <div className="container py-10 text-red-500">Failed to load blog posts. Please try again later.</div>;
}

return (
  <SectionLayout id="blog-hero" hasBackdrop={false}>
    <div className="home">
      <div className="flex flex-row justify-between items-center gap-8">
        <section className="hero-left max-w-xl">
          <h1 className="text-3xl font-bold mb-2">Some pieces of words put together for your consumption</h1>
          <p className="text-lg text-gray-600">
            Combined 10 years of working experience as a Marketing professional and Software developer.
          </p>
        </section>
        <section className="right">
          <Image
            src="/mawuli.jpg"
            alt="Hero illustration"
            width={400}
            height={300}
            priority
            className="rounded-xl object-cover"
          />
        </section>
      </div>

      <div className="posts container mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedPosts.length > 0 ? (
          sortedPosts.map((post) => (
            <div className="post border rounded-lg overflow-hidden shadow hover:shadow-md transition" key={post.id}>
              <div className="img w-full h-52 relative">
                <Image
                  src={post.img?.startsWith('http') ? post.img : `${}/uploads/${post.img}`}
                  alt={post.title || 'Blog post image'}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="content p-4">
                <Link href={`/posts/${post.id}`} className="link">
                  <h1 className="text-xl font-semibold mb-2">{post.title}</h1>
                </Link>
                <p className="text-sm text-gray-600 mb-4">{getText(post.descrip).slice(0, 150)}...</p>
                <Link href={`/posts/${post.id}`}>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Read More</button>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <div>No posts found</div>
        )}
      </div>
    </div>
  </SectionLayout>
);
};

export default Blog;