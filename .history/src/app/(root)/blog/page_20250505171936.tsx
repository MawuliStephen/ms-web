'use client';
import { useState } from 'react';
import { Sparkles, BookOpen, Lightbulb, BarChart, Search } from 'lucide-react';
import { SectionLayout, SectionHeader } from './../components/navigations';

type Post = {
    id: number;
    title: string;
    excerpt: string;
    category: string;
    date: string;
    readTime: string;
};

type Category = {
    name: string;
    icon: React.ComponentType<{ className?: string }>;
    count: number;
};

export default function Blog() {
    const [activeCategory, setActiveCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    const posts: Post[] = [
        {
            id: 1,
            title: 'Next.js 14 Performance Optimization',
            excerpt: 'Learn the latest techniques to optimize your Next.js applications.',
            category: 'Technology',
            date: 'June 10, 2024',
            readTime: '6 min read'
        },
        // Add more posts...
    ];

    const categories: Category[] = [
        { name: 'All', icon: Sparkles, count: 12 },
        { name: 'Technology', icon: Lightbulb, count: 5 },
        { name: 'Lifestyle', icon: BookOpen, count: 4 },
        { name: 'Business', icon: BarChart, count: 3 },
    ];

    const filteredPosts = activeCategory === 'All'
        ? posts
        : posts.filter(post => post.category === activeCategory);

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-dark-background">
            {/* Hero Section */}
            <SectionLayout id="blog-hero" className="bg-gradient-to-r from-teal-600 to-teal-800 text-white py-20">
                <div className="text-center">
                    <SectionHeader 
                        title="Next.js Blog" 
                        description="Cutting-edge content about web development and design" 
                        className="text-white"
                    />
                    <div className="relative max-w-md mx-auto mt-8">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Search className="h-5 w-5 text-gray-300" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search articles..."
                            className="block w-full pl-10 pr-3 py-3 rounded-full bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/30"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>
            </SectionLayout>

            {/* Main Content */}
            <SectionLayout id="blog-content" className="py-12">
                {/* Categories */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category) => {
                        const Icon = category.icon;
                        return (
                            <button
                                key={category.name}
                                onClick={() => setActiveCategory(category.name)}
                                className={`flex items-center px-6 py-3 rounded-full transition-all ${
                                    activeCategory === category.name
                                        ? 'bg-primary text-white shadow-lg'
                                        : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-md'
                                }`}
                            >
                                <Icon className="h-5 w-5 mr-2" />
                                <span>{category.name}</span>
                                <span className={`ml-2 text-xs font-medium px-2.5 py-0.5 rounded-full ${
                                    activeCategory === category.name
                                        ? 'bg-white/20 text-white'
                                        : 'bg-primary/10 text-primary dark:text-primary-light'
                                }`}>
                                    {category.count}
                                </span>
                            </button>
                        );
                    })}
                </div>

                {/* Blog Posts */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredPosts.map((post) => (
                        <div 
                            key={post.id} 
                            className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700/50"
                        >
                            <div className="h-48 bg-gradient-to-r from-purple-400 to-blue-500 overflow-hidden">
                                {/* Replace with actual image */}
                                <div className="w-full h-full flex items-center justify-center text-white text-2xl font-bold">
                                    {post.category}
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                                    <span>{post.date}</span>
                                    <span className="mx-2">•</span>
                                    <span>{post.readTime}</span>
                                </div>
                                <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{post.title}</h2>
                                <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
                                <div className="flex justify-between items-center">
                                    <span className="inline-block bg-primary/10 text-primary dark:text-primary-light text-xs px-3 py-1 rounded-full">
                                        {post.category}
                                    </span>
                                    <button className="text-primary hover:text-primary-dark dark:hover:text-primary-light font-medium">
                                        Read More →
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Load More Button */}
                <div className="text-center mt-12">
                    <button className="bg-white dark:bg-gray-800 text-primary font-semibold py-3 px-8 rounded-full border border-primary hover:bg-primary/10 dark:hover:bg-gray-700 transition">
                        Load More Articles
                    </button>
                </div>
            </SectionLayout>
        </div>
    );
}


{/* // import { useState } from 'react';
// import Head from 'next/head';
// // import { SparklesIcon, BookOpenIcon, LightBulbIcon, ChartBarIcon } from '@heroicons/react/outline';
// import { Sparkles, BookOpen, Lightbulb, BarChart } from 'lucide-react';

// const posts = [
//   { */}
//     id: 1,
//     title: 'The Future of Web Development',
//     excerpt: 'Exploring the latest trends and technologies shaping the future of web development.',
//     category: 'Technology',
//     date: 'May 15, 2023',
//     readTime: '5 min read',
//     image: '/tech-bg.jpg'
//   },
//   {
//     id: 2,
//     title: 'Sustainable Living in Urban Areas',
//     excerpt: 'How to adopt eco-friendly practices even in the heart of the city.',
//     category: 'Lifestyle',
//     date: 'May 10, 2023',
//     readTime: '4 min read',
//     image: '/lifestyle-bg.jpg'
//   },
//   // Add more posts...
// ];

// const categories = [
//   { name: 'All', icon: SparklesIcon, count: 12 },
//   { name: 'Technology', icon: LightBulbIcon, count: 5 },
//   { name: 'Lifestyle', icon: BookOpenIcon, count: 4 },
//   { name: 'Business', icon: ChartBarIcon, count: 3 },
// ];

// export default function Blog() {
//   const [activeCategory, setActiveCategory] = useState('All');

//   const filteredPosts = activeCategory === 'All'
//     ? posts
//     : posts.filter(post => post.category === activeCategory);

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Head>
//         <title>Modern Blog | Thoughtful Content</title>
//         <meta name="description" content="A modern blog with beautiful design and categories" />
//       </Head>

//       {/* Hero Section */}
//       <div className="relative bg-gradient-to-r from-blue-600 to-indigo-800 text-white py-20 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto text-center">
//           <h1 className="text-4xl md:text-5xl font-bold mb-6">Discover Amazing Content</h1>
//           <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
//             Explore our collection of articles on technology, lifestyle, business and more.
//           </p>
//           <div className="relative max-w-md mx-auto">
//             <input
//               type="text"
//               placeholder="Search articles..."
//               className="w-full py-3 px-5 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />
//             <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Categories */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         <div className="flex flex-wrap justify-center gap-4 mb-12">
//           {categories.map((category) => {
//             const Icon = category.icon;
//             return (
//               <button
//                 key={category.name}
//                 onClick={() => setActiveCategory(category.name)}
//                 className={`flex items-center px-6 py-3 rounded-full transition-all ${activeCategory === category.name
//                   ? 'bg-blue-600 text-white shadow-lg'
//                   : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'}`}
//               >
//                 <Icon className="h-5 w-5 mr-2" />
//                 <span>{category.name}</span>
//                 <span className="ml-2 bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
//                   {category.count}
//                 </span>
//               </button>
//             );
//           })}
//         </div>

//         {/* Blog Posts */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {filteredPosts.map((post) => (
//             <div key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
//               <div className="h-48 bg-gray-300 overflow-hidden">
//                 {/* Replace with actual image */}
//                 <div className="w-full h-full bg-gradient-to-r from-purple-400 to-blue-500 flex items-center justify-center text-white text-2xl font-bold">
//                   {post.category}
//                 </div>
//               </div>
//               <div className="p-6">
//                 <div className="flex items-center text-sm text-gray-500 mb-2">
//                   <span>{post.date}</span>
//                   <span className="mx-2">•</span>
//                   <span>{post.readTime}</span>
//                 </div>
//                 <h2 className="text-xl font-bold text-gray-800 mb-2">{post.title}</h2>
//                 <p className="text-gray-600 mb-4">{post.excerpt}</p>
//                 <div className="flex justify-between items-center">
//                   <span className="inline-block bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
//                     {post.category}
//                   </span>
//                   <button className="text-blue-600 hover:text-blue-800 font-medium">
//                     Read More →
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Load More Button */}
//         <div className="text-center mt-12">
//           <button className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-full border border-blue-600 hover:bg-blue-50 transition">
//             Load More Articles
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }