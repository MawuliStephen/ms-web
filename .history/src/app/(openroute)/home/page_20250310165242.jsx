
import { generateMetadata } from '@/utils/metaData';
import IndexPage from './IndexPage';

// Generate metadata dynamically
export const metadata = generateMetadata({
  title: 'Mawuli Stephen | Home | Software Engineer & Marketing Professional',
  description: 'Welcome to Mawuli Stephen’s homepage! Explore my expertise in software development, marketing, and creative solutions for businesses.',
  image: '/images/home-og-image.jpg',
});

// Render the IndexPage component
export default function Home() {
  return <IndexPage />;
}
