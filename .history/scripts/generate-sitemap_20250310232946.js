// scripts/generate-sitemap.js
const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const path = require('path');
const axios = require('axios');
const 

// Base URL for your website (replace with your production domain)
const baseUrl = 'https://www.mawulistephen.com';


// API base URL
const apiBaseUrl = process.env.NEXT_PUBLIC_BASE_URL;

// Fetch dynamic data (e.g., blog posts)
const fetchPosts = async () => {
  try {
    const response = await axios.get(`${apiBaseUrl}/posts`);
    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
};

// Generate the sitemap
const generateSitemap = async () => {
  const posts = await fetchPosts();

  // Create a sitemap stream
  const sitemap = new SitemapStream({ hostname: baseUrl });

  // Add static pages
  sitemap.write({ url: '/', changefreq: 'daily', priority: 1.0 });
  sitemap.write({ url: '/about', changefreq: 'monthly', priority: 0.8 });
  sitemap.write({ url: '/blog', changefreq: 'weekly', priority: 0.9 });

  // Add dynamic pages (e.g., blog posts)
  posts.forEach((post) => {
    sitemap.write({
      url: `/posts/${post.id}`,
      lastmod: new Date(post.date).toISOString(),
      changefreq: 'weekly',
      priority: 0.7,
    });
  });

  sitemap.end();

  // Write the sitemap to the public folder
  const sitemapPath = path.resolve(__dirname, '../public/sitemap.xml');
  const writeStream = createWriteStream(sitemapPath);
  sitemap.pipe(writeStream);

  console.log('Sitemap generated successfully!');
};

generateSitemap();