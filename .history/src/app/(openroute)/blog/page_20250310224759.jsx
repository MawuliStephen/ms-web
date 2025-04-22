import React from 'react';
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


            BlogPage</div>
    )
}

export default BlogPage