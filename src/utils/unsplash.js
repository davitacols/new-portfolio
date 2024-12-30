export const getUnsplashImage = (query, width = 400, height = 300) => {
    const baseUrl = "https://source.unsplash.com/random";
    const size = `${width}x${height}`;
    const searchQuery = query.replace(/\s+/g, '-').toLowerCase();
    return `${baseUrl}/${size}?${searchQuery}`;
  };
  
  