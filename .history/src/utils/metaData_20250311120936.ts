interface OpenGraph {
    title?: string;
    description?: string;
    images?: string | string[];
    url?: string;
  }
  
  interface PageData {
    title: string;
    description: string;
    openGraph?: OpenGraph;
  }
  
  interface MetadataResult {
    title: string;
    description: string;
    openGraph: {
      title: string;
      description: string;
      images: { url: string }[];
      url: string;
    };
  }
  
  const Metadata = (pageData: PageData): MetadataResult => {
    const { title, description, openGraph } = pageData;
  
    console.log("Page Data:", pageData);
  
    return {
      title,
      description,
      openGraph: {
        title: openGraph?.title || title,
        description: openGraph?.description || description,
        images: openGraph?.images
          ? (Array.isArray(openGraph.images) ? openGraph.images.map(url => ({ url })) : [{ url: openGraph.images }])
          : [],
        url: openGraph?.url || 'https://www.mawulistephen.com',
      },
    };
  };
  
  export default Metadata;