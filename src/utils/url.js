export const getYoutubeVideoId = (url) => {
  const $url = new URL(url);
  const id = $url.searchParams.get("v");
  return `https://www.youtube.com/embed/${id}`;
};
