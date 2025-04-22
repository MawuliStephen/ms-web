'use client';
import React from 'react';
import Head from 'next/head';
// import Metadata from '../../../utils/metadata';
// import Metadata from '../../../utils/metaData';
import Metadata from '../../../utils/metaData';

const BlogPage = () => {


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
