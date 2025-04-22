const Metadata = (pageData) => {
  const { title, description, openGraph } = pageData;

  return {
    title,
    description,
    keyword
    openGraph: {
      title: openGraph.title || title,
      description: openGraph.description || description,
      images: openGraph.images ? [{ url: openGraph.images }] : [],
      url: openGraph.url || 'https://www.mawulistephen.com',
    },
  };
};

export default Metadata;


// const Metadata = (pageData) => {
//   const { title, description, image, url } = pageData;

//   return {
//     title,
//     description,
//     openGraph: {
//       title,
//       description,
//       images: image ? [{ url: image }] : [],
//       url: url || 'https://www.mawulistephen.com',
//     },
//   };
// };

// export default Metadata; // Ensure it's default export

