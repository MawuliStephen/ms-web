'use client';

import React from 'react';
import Head from 'next/head';

const JsonLd = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Mawuli Stephen",
    "jobTitle": "Fullstack JavaScript and Flutter Developer",
    "image": "https://yourwebsite.com/image/mawuli-stephen.jpg",
    "url": "https://yourwebsite.com",
    "sameAs": [
      "https://github.com/MawuliStephen",
      "https://linkedin.com/in/mawuli-stephen"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance / Remote",
      "url": "https://yourwebsite.com"
    },
    "description": "Experienced Fullstack Software Engineer specializing in React, Next.js, Node.js, Angular, and Flutter. Available for remote roles worldwide.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "Remote"
    }
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </Head>
  );
};

export default JsonLd;
