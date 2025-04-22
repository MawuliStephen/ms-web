import React from 'react';
import He
import Metadata from '../../../utils/metadata';

const BlogPage = () => {
    const meta = Metadata({
        title: 'Mawuli Stephen | Home ',
        description: 'Welcome to the home page of my Next.js app!',
        openGraph: {
            title: 'Mawuli Stephen | Home | Software Engineer',
            description: 'Welcome to the home page of my Next.js app!',
            images: '/images/home-og-image.jpg',
        },
    });
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


            BlogPage
    </div>
    )
}

export default BlogPage