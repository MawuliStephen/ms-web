const Metadata = (pageData) => {
  const { title, description, image, url } = pageData;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: image ? [{ url: image }] : [],
      url: url || 'https://www.mawulistephen.com',
    },
  };
};

export default Metadata; // Ensure it's default export

