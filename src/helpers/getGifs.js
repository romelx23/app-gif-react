//La función getGif devuelve una promesa 
export const getGif = async (category) => {
    const url =
      `https://api.giphy.com/v1/gifs/search?api_key=ztgbVlNjcEmzOwmWpxp43ePQT1hSNAyQ&q=${encodeURI(category)}&limit=10`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    console.log({data})
    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
      };
    });
    // console.log(gifs);
    return gifs;
  };