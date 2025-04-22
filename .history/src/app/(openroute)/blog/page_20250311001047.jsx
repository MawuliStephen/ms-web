'use client'
import React from 'react';
import Head from 'next/head';
import Metadata from '../../../utils/metadata';

console.log(Metadata)
const BlogPage = () => {
    // const meta = Metadata({
    //     title: 'Mawuli Stephen | Blog',
    //     description: 'Welcome to the blog page of my Next.js app!',
    //     openGraph: {
    //         title: 'Mawuli Stephen | Blog | Software Engineer',
    //         description: 'Welcome to the blog page of my Next.js app!',
    //         images: '/images/blog-og-image.jpg',
    //         url: 'https://www.mawulistephen.com/blog',
    //     },
    // });

    useEffect(() => {
        const metaData = Metadata({
            title: 'Mawuli Stephen | Blog',
            description: 'Welcome to the blog page of my Next.js app!',
            image: '/images/blog-og-image.jpg',
            url: 'https://www.mawulistephen.com/blog',
        });
        setMeta(metaData);
    }, []);

    console.log(meta)

    return (
        <div>
            <Head>
                <title>{meta.title}</title>
                <meta name="description" content={meta.description} />
                <meta property="og:title" content={meta.openGraph.title} />
                <meta property="og:description" content={meta.openGraph.description} />
                {meta.openGraph.images.length > 0 && (
                    <meta property="og:image" content={meta.openGraph.images[0].url} />
                )}
                <meta property="og:url" content={meta.openGraph.url} />
            </Head>
            <h1>BlogPage</h1>
        </div>
    );
};

export default BlogPage;