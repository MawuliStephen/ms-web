
import { Helmet } from 'react-helmet';

function SEO({ title, description }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      {/* Add other meta tags here */}
    </Helmet>
  );
}

export default SEO;
